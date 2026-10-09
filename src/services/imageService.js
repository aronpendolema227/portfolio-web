export function convertirImagen(file) {
    return new Promise((resolve, reject) => {

        const reader = new FileReader();

        reader.onload = () => {

            const imagen = new Image();

            imagen.onload = () => {

                const maxWidth = 900;
                const maxHeight = 900;

                let width = imagen.width;
                let height = imagen.height;

                const escala = Math.min(
                    1,
                    maxWidth / width,
                    maxHeight / height
                );

                width = Math.round(width * escala);
                height = Math.round(height * escala);

                const canvas =
                    document.createElement("canvas");

                const contexto =
                    canvas.getContext("2d");

                canvas.width = width;
                canvas.height = height;

                contexto.clearRect(
                    0,
                    0,
                    width,
                    height
                );

                contexto.drawImage(
                    imagen,
                    0,
                    0,
                    width,
                    height
                );

                const esPng =
                    file.type === "image/png";

                if (esPng) {
                    resolve(
                        canvas.toDataURL("image/png")
                    );
                } else {
                    resolve(
                        canvas.toDataURL(
                            "image/jpeg",
                            0.82
                        )
                    );
                }
            };

            imagen.onerror = () => {
                reject(
                    new Error(
                        "No se pudo procesar la imagen."
                    )
                );
            };

            imagen.src = reader.result;
        };

        reader.onerror = () => {
            reject(
                new Error(
                    "No se pudo leer el archivo."
                )
            );
        };

        reader.readAsDataURL(file);
    });
}