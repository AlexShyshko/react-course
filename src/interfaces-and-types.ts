// TYPES

type InputHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

// INTERFACES

// Component props
interface HeaderProps {
	checked: boolean;
	handleChange: InputHandler;
}

interface MainProps {
  checked: boolean;
};

// EXPORT TYPES
export type { InputHandler };
// EXPORT INTERFACES
export type { HeaderProps, MainProps };
