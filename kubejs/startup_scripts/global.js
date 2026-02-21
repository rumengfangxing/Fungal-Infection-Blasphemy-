

// All Attribute =====================================

// 真菌化
global.ATTR_FUNGIFIED_HEALTH = { key: 'minecraft:generic.max_health', name: 'FungifiedMaxHealth', operation: 'addition' }
global.ATTR_FUNGIFIED_DAMAGE = { key: 'minecraft:generic.attack_damage', name: 'FungifiedAttackDamage', operation: 'addition' }
global.ATTR_FUNGIFIED_ARMOR = { key: 'minecraft:generic.armor', name: 'FungifiedArmor', operation: 'addition' }

// 增加器官槽位
global.ATTR_CURIOS_FUNGIFIED_ORGAN = { key: 'organ', name: 'FungifiedOrganSlot', operation: 'addition' }

// 私有饰品属性 ---------------------------------------

// 技巧-弓
global.ATTR_HEAVY_BOW_ARROW_DAMAGE = { key: 'attributeslib:arrow_damage', name: 'HeavyBowArrowDamage', operation: 'multiply_total' }
global.ATTR_HEAVY_BOW_ARROW_VELOCITY = { key: 'attributeslib:arrow_velocity', name: 'HeavyBowArrowVelocity', operation: 'multiply_total' }
global.ATTR_HEAVY_BOW_DRAW_SPEED = { key: 'attributeslib:draw_speed', name: 'HeavyBowDrawSpeed', operation: 'multiply_total' }

global.ATTR_POWERFUL_SHOOTING_ARROW_DAMAGE = { key: 'attributeslib:arrow_damage', name: 'PowerfulShootingArrowDamage', operation: 'addition' }
global.ATTR_POWERFUL_SHOOTING_ARROW_VELOCITY = { key: 'attributeslib:arrow_velocity', name: 'PowerfulShootingArrowVelocity', operation: 'addition' }

global.ATTR_AUTO_SHOOTING_AUTO_FIRE = { key: 'newnew_attributes:auto_fire', name: 'AutoShootingAutoFire', operation: 'addition' }
global.ATTR_AUTO_SHOOTING_DRAW_SPEED = { key: 'attributeslib:draw_speed', name: 'AutoShootingDrawSpeed', operation: 'addition' }

// 技巧-巫
global.ATTR_ECONOMIZE_SOUL_INCREASE_EFFICIENCY = { key: 'goety_revelation:soul_increase_efficiency', name: 'EconomizeSoulIncreaseEfficiency', operation: 'addition' }
global.ATTR_ECONOMIZE_SOUL_DECREASE_REDUCTION = { key: 'goety_revelation:soul_decrease_reduction', name: 'EconomizeSoulDecreaseReduction', operation: 'addition' }
global.ATTR_ECONOMIZE_SOUL_STEALING = { key: 'goety_revelation:soul_stealing', name: 'EconomizeSoulStealing', operation: 'addition' }

global.ATTR_EXPEDIENCY_CAST_DURATION = { key: 'goety_revelation:cast_duration', name: 'ExpediencyCastDuration', operation: 'addition' }
global.ATTR_EXPEDIENCY_SPELL_COOLDOWN = { key: 'goety_revelation:spell_cooldown', name: 'ExpediencySpellCooldown', operation: 'addition' }

global.ATTR_FORBIDDEN_SPELL_CAST_DURATION = { key: 'goety_revelation:cast_duration', name: 'ForbiddenCastDuration', operation: 'multiply_total' }
global.ATTR_FORBIDDEN_SPELL_SPELL_POWER = { key: 'goety_revelation:spell_power', name: 'ForbiddenSpellPower', operation: 'addition' }
global.ATTR_FORBIDDEN_SPELL_SPELL_POWER_MULTIPLIER = { key: 'goety_revelation:spell_power_multiplier', name: 'ForbiddenSpellPowerMultiplier', operation: 'multiply_total' }
global.ATTR_FORBIDDEN_SPELL_SPELL_RADIUS = { key: 'goety_revelation:spell_radius', name: 'ForbiddenSpellRadius', operation: 'addition' }
global.ATTR_FORBIDDEN_SPELL_SPELL_RANGE = { key: 'goety_revelation:spell_range', name: 'ForbiddenSpellRange', operation: 'addition' }

global.ATTR_POTENT_SPELL_RANGE = { key: 'goety_revelation:spell_range', name: 'PotentSpellRange', operation: 'addition' }
global.ATTR_POTENT_SPELL_POWER = { key: 'goety_revelation:spell_power', name: 'PotentSpellPower', operation: 'addition' }
global.ATTR_POTENT_SPELL_POWER_MULTIPLIER = { key: 'goety_revelation:spell_power_multiplier', name: 'PotentSpellPowerMultiplier', operation: 'addition' }

// 技巧-战
global.ATTR_ATROCITY_CRIT_DAMAGE = { key: 'attributeslib:crit_damage', name: 'AtrocityCritDamage', operation: 'multiply_total' }

global.ATTR_CRIT_CRIT_CHANCE = { key: 'attributeslib:crit_chance', name: 'CritCritChance', operation: 'addition' }

global.ATTR_DEXTERITY_STEALTH = { key: 'betterstealth:stealth', name: 'DexterityStealth', operation: 'addition' }
global.ATTR_DEXTERITY_STEP_HEIGHT = { key: 'forge:step_height_addition', name: 'DexterityStepHeight', operation: 'addition' }
global.ATTR_DEXTERITY_SWIM_SPEED = { key: 'forge:swim_speed', name: 'DexteritySwimSpeed', operation: 'addition' }
global.ATTR_DEXTERITY_MOVEMENT_SPEED = { key: 'minecraft:generic.movement_speed', name: 'DexterityMovementSpeed', operation: 'addition' }

global.ATTR_PIERCE_PROT_SHRED = { key: 'attributeslib:prot_shred', name: 'PierceProtShred', operation: 'addition' }
global.ATTR_PIERCE_PROT_PIERCE = { key: 'attributeslib:prot_pierce', name: 'PierceProtPierce', operation: 'addition' }
global.ATTR_PIERCE_ARMOR_SHRED = { key: 'attributeslib:armor_shred', name: 'PierceArmorShred', operation: 'addition' }
global.ATTR_PIERCE_ARMOR_PIERCE = { key: 'attributeslib:armor_pierce', name: 'PierceArmorPierce', operation: 'addition' }

// 非私有物品属性 -------------------------------------

// 霜冻之刃
global.ATTR_FROZEN_BLADE_COLD_DAMAGE = { key: 'attributeslib:cold_damage', name: 'FrozenBladeColdDamage', operation: 'addition' }

// 永冻冰核
global.ATTR_PERMAFROST_COLD_DAMAGE = { key: 'attributeslib:cold_damage', name: 'PermafrostColdDamage', operation: 'addition' }
global.ATTR_PERMAFROST_ENTITY_REACH = { key: 'forge:entity_reach', name: 'PermafrostEntityReach', operation: 'addition' }

// 狂暴血液样本
global.ATTR_BEZERK_SYRINGE_ATTACK_DAMAGE = { key: 'minecraft:generic.attack_damage', name: 'BezerkSyringeAttackDamage', operation: 'multiply_total' }
global.ATTR_BEZERK_SYRINGE_ATTACK_SPEED = { key: 'minecraft:generic.attack_speed', name: 'BezerkSyringeAttackSpeed', operation: 'multiply_total' }

// 钙化血液样本
global.ATTR_CALCIFIED_SYRINGE_KNOCKBACK = { key: 'minecraft:generic.attack_knockback', name: 'CalcifiedSyringeKnockback', operation: 'multiply_total' }

// 强壮血液样本
global.ATTR_REINFORCED_SYRINGE_ARMOR = { key: 'minecraft:generic.armor', name: 'ReinforcedSyringeArmor', operation: 'multiply_total' }

// 吸血血液样本
global.ATTR_VAMPIRIC_SYRINGE_LIFE_STEAL = { key: 'attributeslib:life_steal', name: 'VampiricSyringeLifeSteal', operation: 'addition' }