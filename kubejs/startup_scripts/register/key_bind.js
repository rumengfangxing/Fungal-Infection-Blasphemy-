
const $GLFW = Java.loadClass("org.lwjgl.glfw.GLFW");
const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");

global.SkillFungifiedHealth = new $KeyMapping('key.kubejs.skill_fungified_health', $GLFW.GLFW_KEY_H, 'key.categories.kubejs')

StartupEvents.init(event => {
    $KeyMappingRegistry.register(global.SkillFungifiedHealth)
})