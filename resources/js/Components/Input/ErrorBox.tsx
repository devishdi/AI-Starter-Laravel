import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import IconError from '../Icons/IconError';

interface ErrorBoxInterface {
    message: string;
    active: boolean;
    id: string;
    type: 'icon' | 'text';
}

interface ErrorBoxItemInterface {
    message: string;
    active: boolean;
    id: string;
}

function ErrorBoxIcon(props: ErrorBoxItemInterface) {
    const { message, active, id } = props;

    return (
        <div className={active ? 'show errorbox-icon' : 'hide errorbox-icon'}>
            <span
                data-tooltip-id={id}
                className={`validation-error-icon ${active && 'validation-error-active'}`}
            >
                <IconError />
            </span>
            <ReactTooltip
                id={id}
                place="bottom"
                content={message}
                className="tooltip-error"
            />
        </div>
    );
}

function ErrorBoxText(props: ErrorBoxItemInterface) {
    const { message, active, id } = props;

    return (
        <span
            className={`validation-error-icon ${active && 'validation-error-active'}`}
            id={`${id}-span`}
        >
            {message}
        </span>
    );
}

export default function ErrorBox(props: ErrorBoxInterface) {
    const { message, active, id, type = 'text' } = props;

    return type === 'icon' ? (
        <ErrorBoxIcon id={id} message={message} active={active} />
    ) : (
        <ErrorBoxText id={id} message={message} active={active} />
    );
}
