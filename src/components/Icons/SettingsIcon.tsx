export default function SettingsIcon({ color = "#767681" }: { color?: string }) {
    return (
        <svg
            width='22'
            height='20'
            viewBox='0 0 22 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M14.5 10C14.5 10.4596 14.4095 10.9148 14.2336 11.3394C14.0577 11.764 13.7999 12.1499 13.4749 12.4749C13.1499 12.7999 12.764 13.0577 12.3394 13.2336C11.9148 13.4095 11.4596 13.5 11 13.5C10.5404 13.5 10.0852 13.4095 9.66061 13.2336C9.23597 13.0577 8.85013 12.7999 8.52513 12.4749C8.20012 12.1499 7.94231 11.764 7.76642 11.3394C7.59053 10.9148 7.5 10.4596 7.5 10C7.5 9.07174 7.86875 8.1815 8.52513 7.52513C9.1815 6.86875 10.0717 6.5 11 6.5C11.9283 6.5 12.8185 6.86875 13.4749 7.52513C14.1313 8.1815 14.5 9.07174 14.5 10Z'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M19.79 7.152C20.598 8.542 21 9.237 21 10C21 10.763 20.597 11.458 19.79 12.848L17.867 16.164C17.064 17.548 16.662 18.24 16.002 18.62C15.342 19 14.54 19 12.937 19H9.063C7.46 19 6.658 19 5.998 18.62C5.338 18.24 4.936 17.548 4.133 16.164L2.21 12.848C1.403 11.458 1 10.763 1 10C1 9.237 1.403 8.542 2.21 7.152L4.133 3.836C4.936 2.452 5.338 1.76 5.998 1.38C6.658 1 7.46 1 9.063 1H12.937C14.54 1 15.342 1 16.002 1.38C16.662 1.76 17.064 2.452 17.867 3.836L19.79 7.152Z'
                stroke='#27272A'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
