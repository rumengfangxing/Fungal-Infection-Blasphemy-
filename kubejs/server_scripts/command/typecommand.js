// 必须加载 Java 类
const StringArgumentType = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType');

ServerEvents.commandRegistry(event => {
    const { commands } = event;

    event.register(
        commands.literal('type')
            .then(
                // 关键：使用 StringArgumentType.greedyString()，不是 args.STRING.xxx
                commands.argument('text', StringArgumentType.greedyString())
                    .executes(context => {
                        const player = context.source.player;
                        // 控制台执行时 player 为 null，直接忽略
                        if (!player) return 0;

                        // 获取参数（String(...) 确保转成 JS 字符串，避免 Rhino 对 Java String 的方法解析问题）
                        const text = String(StringArgumentType.getString(context, 'text'));

                        // greedyString 会原样保留参数里的空格（含中间空格和尾随空格），
                        // 例如 /type /tpa Steve 会填入 "/tpa Steve"
                        // 另外支持用 + 代替空格，方便明确输入空格，
                        // 例如 /type /tpa+ 会填入 "/tpa "（+ 会被替换成空格）
                        // 用 split/join 代替正则，兼容性最好
                        const filledText = text.split('+').join(' ');

                        // 调试日志：方便确认实际收到的内容和替换后的内容
                        console.log('[type] input=[' + text + '] output=[' + filledText + ']');

                        // 发送给客户端
                        player.sendData('kubejs:open_chat', { text: filledText });

                        // 反馈
                        player.tell(Text.of('§a已填入聊天框: §f' + filledText));
                        return 1;
                    })
            )
    );
});
