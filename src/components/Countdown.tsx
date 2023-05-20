import { useEffect, useState } from 'react';
import Label from './Label';

interface CountdownProps {
    until?: Date;
    className?: string;
}

const Countdown: React.FC<CountdownProps> = ({ until }) => {
    const [timeRemaining, setTimeRemaining] = useState<string>('');

    useEffect(() => {
        if (!until) {
            return;
        }
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = until.getTime() - currentTime;

            // Calculate days, hours, minutes, and seconds
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Format the countdown string
            const countdownText = `${hours}h ${minutes}m ${seconds}s`;
            setTimeRemaining(countdownText);

            // Clear interval and update the time remaining once the countdown is completed
            if (distance <= 0) {
                clearInterval(interval);
                setTimeRemaining('Countdown complete!');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [until]);

    return <Label className='text-sm font-semibold' text={`Ends in ${timeRemaining}`} />;
};

export default Countdown;