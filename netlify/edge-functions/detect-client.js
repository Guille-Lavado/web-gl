export default async (request, context) => {
    const userAgent = request.headers.get("user-agent") || "";

    // Si el cliente contiene 'curl', devolvemos una respuesta de texto personalizada
    if (userAgent.toLowerCase().includes("curl")) {
        const body = `¡Bienvenido a mi portfoli desde terminal!
----------------------------------------
Nombre: Guillermo Lavado
Rol: Fullstack Developer
Contacto: lavadoguille@gmail.com
----------------------------------------
`;
        return new Response(body, {
            headers: { "content-type": "text/plain; charset=utf-8" },
        });
    }

    // Si es un navegador normal, la petición continua al index.html
    return context.next();
};