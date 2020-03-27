import axios from 'axios'

const BASE_URL = 'http://api.currencylayer.com/'

const API_KEY = '1f41ee7711a7e9be6751fb796f2e5fd5'

export const CONVERTE_MOEDAS = 'CONVERTE_MOEDAS'

export function ConverterMoedas(converte) {
    // acessar a url do currencylayer.com
    const url = `${BASE_URL}/convert?access_key=${API_KEY}`
    //passar o DE e o PARA, e o valor
    const parametros = {
        from: converte.de,
        to: converte.para,
        amount: converte.valor,
        format:1
    }

    const request = axios.get(url, parametros)
    //recebe o valor convertido
    return {
        type: CONVERTE_MOEDAS,
        payload: request
    }
}