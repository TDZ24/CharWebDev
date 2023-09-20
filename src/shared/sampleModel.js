function SampleText(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });
    return data;
} 

function SampleImage(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "image",
        "image": {
            "link": "https://compubit.com.co/wp-content/uploads/2021/07/huawei_portatiles.jpg"
        }  
    });
    return data;
} 

function SampleAudio(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }  
    });
    return data;
} 

function SampleVideo(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }  
    });
    return data;
}

function SampleDocument(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf"
        }  
    });
    return data;
}

function SampleButtons(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "CONFIRMA EL REGISTRO"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Yea maracuyea"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No que pesar"
                        }
                    }
                ]
            }
        } 
    });
    return data;
}

function SampleList(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Elije una opcion para continuar"
            },
            "action": {
                "button": "Ver Opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title":"Comprar",
                                "description":"Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title":"Vender",
                                "description":"Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atención",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title":"Agencia",
                                "description":"Visita nuestra agencia"
                            },
                            {
                                "id": "main-contacto",
                                "title":"Centro de contacto",
                                "description":"Te atendera uno de nuestros agentes"
                            }
                        ]
                    }
                ]
            }
        } 
    });
    return data;
}

function SampleLocation(number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp", 
        "to": number,
        "type": "location",
        "location": {
        "latitude":"35.704113601832",
        "longitude":"139.55772097142432",
        "name":"Hombres paloma",
        "address":"1-chōme-11 Nishikubo, Musashino, Tokyo 180-0013, Japón"
    }
});
return data;
}

module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleVideo,
    SampleDocument,
    SampleButtons,
    SampleList,
    SampleLocation
}