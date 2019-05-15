import {EMPTY_OBJ, CAMEL_REG, IS_NON_DIMENSIONAL, XLINK_NS} from '../constants'

const diffProps = ($el, newProps, oldProps, isSvg) => {
    const keys = Object.keys(newProps).sort();
    keys.map((name) => {
        if (name !== 'children' && name !== 'key' &&
            (!oldProps || ((name === 'value' || name === 'checked') ? $el : oldProps)[name] !== newProps[name])) {
            setProperty($el, name, newProps[name], oldProps[name], isSvg);
        }
    )
}

const setProperty = ($el, name, value, oldValue, isSvg) => {
    name = isSvg ? (name === 'className' ? 'class' : name) : (name === 'class' ? 'className' : name);

    addEventListeners($el, name, value, oldValue);
    setPropertyStyle($el, name, value, oldValue)


    if (name !== 'list' && name !== 'tagName' && !isSvg && (name in $el)) {
        $el[name] = value == null ? '' : value;
    } else if (typeof value !== 'function' && name !== 'dangerouslySetInnerHTML') {
        if (value == null || value === false) {
            $el.removeAttribute(name);
        } else {
            $el.setAttribute(name, value);
        }
    }
}

const setPropertyStyle = (dom, attr, value, oldValue) => {
    if (attr !== 'style') {
        return;
    }

    const set = assign(assign({}, oldValue), value);
    for (let i in set) {
        if ((value || EMPTY_OBJ)[i] === (oldValue || EMPTY_OBJ)[i]) {
            continue;
        }
        dom.style.setProperty(
            (i[0] === '-' && i[1] === '-') ? i : i.replace(CAMEL_REG, '-$&'),
            (value && (i in value))
                ? (typeof set[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false)
                ? set[i] + 'px'
                : set[i]
                : ''
        );
    }
}

const addEventListeners = ($el, name, value, oldValue) => {
    if (!isEventProp(name)) {
        return
    }
    (value && !oldValue) && $el.addEventListener(extractEventName(name), value);
    !value && $el.removeEventListener(extractEventName(name), oldValue);
}
const extractEventName = (name) => {
    return name.slice(2).toLowerCase();
}
const isEventProp = (name) => {
    return /^on/.test(name);
}
