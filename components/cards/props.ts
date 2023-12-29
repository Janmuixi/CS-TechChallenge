import type { PropType } from 'vue';
import { CardThemes } from '../components.enums';

export const props = withDefaults(defineProps <
{
theme: String as PropType<CardThemes>,
title: String,
description: String
} > ()), {
theme: CardThemes, dark, title: , '': , description: , '': 
};
