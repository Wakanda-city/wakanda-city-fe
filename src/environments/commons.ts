const basePath: string = "/wakanda-city/app/v1";

export const commons = {
    wakandaCity: {
        cidadao: {
            preCadastro: basePath + "/cidadao/pre-cadastro"
        },

        municipio: {
            carregaMunicipios: basePath + "/municipio/{nome}"
        }
    }
}