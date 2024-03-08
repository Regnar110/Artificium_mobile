declare module '*.svg' {
	const content: React.FC<{ width: number, height: number}>;
	export default content;
  }