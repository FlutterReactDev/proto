import { FC } from "react";
import IconProps from "./type";

export const WorldIcon = () => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="32" height="32" rx="8" fill="#D6B35F" />
            <path
                d="M7 16H12M7 16C7 20.9706 11.0294 25 16 25M7 16C7 11.0294 11.0294 7 16 7M12 16H20M12 16C12 20.9706 13.7909 25 16 25M12 16C12 11.0294 13.7909 7 16 7M20 16H25M20 16C20 11.0294 18.2091 7 16 7M20 16C20 20.9706 18.2091 25 16 25M25 16C25 11.0294 20.9706 7 16 7M25 16C25 20.9706 20.9706 25 16 25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const LocationIcon = () => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="32" height="32" rx="8" fill="#C285D6" />
            <path
                d="M16.0001 6C11.5891 6 8.00008 9.589 8.00008 13.995C7.97108 20.44 15.6961 25.784 16.0001 26C16.0001 26 24.0291 20.44 24.0001 14C24.0001 9.589 20.4111 6 16.0001 6ZM16.0001 18C13.7901 18 12.0001 16.21 12.0001 14C12.0001 11.79 13.7901 10 16.0001 10C18.2101 10 20.0001 11.79 20.0001 14C20.0001 16.21 18.2101 18 16.0001 18Z"
                stroke="white"
                stroke-width="2"
            />
        </svg>
    );
};

export const DeleteIcon = () => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="32" height="32" rx="8" fill="#FF6969" />
            <g clip-path="url(#clip0_463_4676)">
                <path
                    d="M12 10.1424L12 8.4709C12 7.30611 12 6.72371 12.3494 6.36186C12.6988 6 13.2612 6 14.386 6L17.614 6C18.7388 6 19.3012 6 19.6506 6.36186C20 6.72371 20 7.30611 20 8.4709V10.1424"
                    stroke="white"
                    stroke-width="2"
                />
                <path
                    d="M18 15.2152V20.2152"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M14 15.2152V20.2152"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M22.1135 19.5237C21.9646 20.8716 21.86 21.8079 21.7062 22.525C21.5563 23.2237 21.3786 23.6123 21.1441 23.8991C20.9476 24.1395 20.7149 24.3478 20.4545 24.5168C20.1437 24.7184 19.7379 24.8523 19.0269 24.9246C18.2973 24.9988 17.3552 25 15.9991 25C14.643 25 13.7008 24.9988 12.9712 24.9246C12.2603 24.8523 11.8545 24.7184 11.5437 24.5168C11.2832 24.3478 11.0506 24.1395 10.854 23.8991C10.6195 23.6123 10.4419 23.2237 10.292 22.525C10.1381 21.8079 10.0335 20.8716 9.88464 19.5237L8.88032 10.4304L23.1178 10.4304L22.1135 19.5237Z"
                    stroke="white"
                    stroke-width="2"
                />
                <path
                    d="M7 10.122H25"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_463_4676">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(4 4)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export const SupportIcon = () => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="32" height="32" rx="8" fill="#FF9728" />
            <path
                d="M9.59961 23.9203L11.1236 22.7012L11.1348 22.6926C11.4525 22.4384 11.6128 22.3101 11.7917 22.2188C11.9522 22.1368 12.1233 22.0771 12.2998 22.0408C12.4988 22 12.706 22 13.1221 22H21.8031C22.921 22 23.4806 22 23.908 21.7822C24.2843 21.5905 24.5905 21.2842 24.7822 20.9079C25 20.4805 25 19.9215 25 18.8036V11.1969C25 10.079 25 9.5192 24.7822 9.0918C24.5905 8.71547 24.2837 8.40973 23.9074 8.21799C23.4796 8 22.9203 8 21.8002 8H10.2002C9.08009 8 8.51962 8 8.0918 8.21799C7.71547 8.40973 7.40973 8.71547 7.21799 9.0918C7 9.51962 7 10.0801 7 11.2002V22.6712C7 23.7369 7 24.2696 7.21846 24.5433C7.40845 24.7813 7.69644 24.9198 8.00098 24.9195C8.35115 24.9191 8.76744 24.5861 9.59961 23.9203Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const FileIcon: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <rect width="32" height="32" rx="8" fill="#FF9728" />
            <path
                d="M9.59961 23.9203L11.1236 22.7012L11.1348 22.6926C11.4525 22.4384 11.6128 22.3101 11.7917 22.2188C11.9522 22.1368 12.1233 22.0771 12.2998 22.0408C12.4988 22 12.706 22 13.1221 22H21.8031C22.921 22 23.4806 22 23.908 21.7822C24.2843 21.5905 24.5905 21.2842 24.7822 20.9079C25 20.4805 25 19.9215 25 18.8036V11.1969C25 10.079 25 9.5192 24.7822 9.0918C24.5905 8.71547 24.2837 8.40973 23.9074 8.21799C23.4796 8 22.9203 8 21.8002 8H10.2002C9.08009 8 8.51962 8 8.0918 8.21799C7.71547 8.40973 7.40973 8.71547 7.21799 9.0918C7 9.51962 7 10.0801 7 11.2002V22.6712C7 23.7369 7 24.2696 7.21846 24.5433C7.40845 24.7813 7.69644 24.9198 8.00098 24.9195C8.35115 24.9191 8.76744 24.5861 9.59961 23.9203Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const AttachmentIcon: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <g clip-path="url(#clip0_469_3319)">
                <path
                    d="M6 15L6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V17C18 19.2091 16.2091 21 14 21C11.7909 21 10 19.2091 10 17V9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9V17"
                    stroke="#C285D6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_469_3319">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const ArrowDown: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <path
                d="M12 6L8 10L4 6"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

export const ArrowUp: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <path
                d="M4 10L8 6L12 10"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

export const ArrowLeft: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <path
                d="M10 12L6 8L10 4"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

export const ArrowRight: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            {...props}
        >
            <path
                d="M6 4L10 8L6 12"
                stroke={color}
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );
};

export const SearchIcon: FC<IconProps> = ({
    color = "currentColor",
    ...props
}) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="11" cy="11" r="7" stroke={color} stroke-width="2" />
            <path
                d="M20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM21.7071 20.2929L16.7071 15.2929L15.2929 16.7071L20.2929 21.7071L21.7071 20.2929Z"
                fill={color}
            />
        </svg>
    );
};
