import { Trait } from "grapesjs";
import i18next from "../../i18n";

export default {
    id: {
        name: 'id',
        label: i18next.t("id", { ns: "traits"})
    },
    for: {
        name: 'for',
        label: i18next.t("for", { ns: "traits"})
    },
    name: {
        name: 'name',
        label: i18next.t("name", { ns: "traits"})
    },
    placeholder: {
        name: 'placeholder',
        label: i18next.t("placeholder", { ns: "traits"})
    },
    title: {
        name: 'title',
        label: i18next.t("title", { ns: "traits"})
    },
    textValue: {
        name: 'value',
        type: 'textExpression',
        label: i18next.t("value", { ns: "traits"})
    },
    required: {
        type: 'checkbox',
        name: 'required',
        label: i18next.t("required", { ns: "traits"})
    },
    rendered: {
        name: 'rendered',
        label: i18next.t("rendered", { ns: "traits"})
    },
    disabled: {
        name: 'disabled',
        label: i18next.t("disabled", { ns: "traits"})
    },
    ajax: {
        name: 'ajax',
        label: i18next.t("ajax", { ns: "traits"})
    }
};