export async function getProducts() {
    const res = await fetch(`${import.meta.env.BASE_URL}api/products.json`, { cache: 'no-store' });
    if (!res.ok) throw new Error('No se pudo cargar el catálogo');
    return res.json();
}
