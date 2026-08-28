// 加载 Minecraft 类
const Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
const ChatScreen = Java.loadClass('net.minecraft.client.gui.screens.ChatScreen');

NetworkEvents.dataReceived('kubejs:open_chat', event => {
    // 获取客户端实例
    const mc = Minecraft.getInstance();
    // 获取服务端传来的文本
    const text = event.data.text;

    // 注意：1.20.1 中 Minecraft.openChatScreen(String) 是 private 方法，
    // Rhino 无法调用，改用 public 的 setScreen + ChatScreen(String) 构造
    // 打开聊天框并预填文本
    mc.setScreen(new ChatScreen(text));
});
