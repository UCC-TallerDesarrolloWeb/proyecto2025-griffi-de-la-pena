export default function Button({ children, variant = "solid", ...props }) {
    const cls =
        variant === "outline"
            ? "btn outline"
            : "btn";
    return (
        <button className={cls} {...props}>
            {children}
        </button>
    );
}
