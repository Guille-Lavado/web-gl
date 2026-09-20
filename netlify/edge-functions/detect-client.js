export default async (request, context) => {
    const userAgent = request.headers.get("user-agent") || "";

    // Si el cliente contiene 'curl', devolvemos una respuesta de texto personalizada
    if (userAgent.toLowerCase().includes("curl")) {
        let body = "\x1b[1m\x1b[36m¡Bienvenido a mi portfolio desde terminal!\x1b[0m\n";
        body += "----------------------------------------\n";
        body += "\x1b[1m\x1b[36mNombre:\x1b[0m Guillermo Lavado\n";
        body += "\x1b[1m\x1b[36mRol:\x1b[0m Fullstack Developer\n";
        body += "\x1b[1m\x1b[36mContacto:\x1b[0m lavadoguille@gmail.com\n";
        body += "----------------------------------------\n";

        return new Response(body, {
            headers: { "content-type": "text/plain; charset=utf-8" },
        });
    }

    // Si es un navegador normal, la petición continua al index.html
    return context.next();
};