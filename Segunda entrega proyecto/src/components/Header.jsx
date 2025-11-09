export default function Header({ children }) {
    return (
        <header style={{ padding: 12, background: "#f6f3ee" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <img
                    src="/logo-505.png"
                    alt="Café 505"
                    width="32"
                    height="32"
                    style={{ borderRadius: 6 }}
                />
                <h1 style={{ margin: 0, color: "#9a5534" }}>Café 505</h1>
            </div>
            {children}
        </header>
    );
}

