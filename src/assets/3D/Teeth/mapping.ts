export const switchTeeth = (key: string) => {
  switch (key) {
    case 'segundo_molar_esquerdo_sup':
      return { id: 0, name: 'Segundo molar esquerdo superior' }
    case 'primeiro_molar_esquerdo_sup':
      return { id: 1, name: 'Primeiro molar esquerdo superior' }
    case 'segundo_pre_molar_esquerdo_sup':
      return { id: 2, name: 'Segundo pré molar esquerdo superior' }
    case 'primeiro_pre_molar_esquerdo_sup':
      return { id: 3, name: 'Primeiro pré molar esquerdo superior' }
    case 'cuspide_esquerdo_sup':
      return { id: 4, name: 'Cúspide esquerdo superior' }
    case 'incisivo_lateral_esquerdo_sup':
      return { id: 5, name: 'Incisivo lateral esquerdo superior' }
    case 'incisivo_central_esquerdo_sup':
      return { id: 6, name: 'Incisivo central esquerdo superior' }
    case 'incisivo_central_direito_sup':
      return { id: 7, name: 'Incisivo central direito superior' }
    case 'incisivo_lateral_direito_sup':
      return { id: 8, name: 'Incisivo lateral direito superior' }
    case 'cuspide_direito_sup':
      return { id: 9, name: 'Cuspide direito superior' }
    case 'primeiro_pre_molar_direito_sup':
      return { id: 10, name: 'Primeiro pré molar direito superior' }
    case 'segundo_pre_molar_direito_sup':
      return { id: 11, name: 'Segundo pré molar direito superior' }
    case 'primeiro_molar_direito_sup':
      return { id: 12, name: 'Primeiro molar direito superior' }
    case 'segundo_molar_direito_sup':
      return { id: 13, name: 'Segundo molar direito superior' }
    case 'segundo_molar_esquerdo_inf':
      return { id: 14, name: 'Segundo molar esquerdo inferior' }
    case 'primeiro_molar_esquerdo_inf':
      return { id: 15, name: 'Primeiro molar esquerdo inferior' }
    case 'segundo_pre_molar_esquerdo_inf':
      return { id: 16, name: 'Segundo pré molar esquerdo inferior' }
    case 'primeiro_pre_molar_esquerdo_inf':
      return { id: 17, name: 'Primeiro pré molar esquerdo inferior' }
    case 'cuspide_esquerdo_inf':
      return { id: 18, name: 'Cúspide esquerdo inferior' }
    case 'incisivo_lateral_esquerdo_inf':
      return { id: 19, name: 'Incisivo lateral esquerdo inferior' }
    case 'incisivo_central_esquerdo_inf':
      return { id: 20, name: 'Incisivo central esquerdo inferior' }
    case 'incisivo_central_direito_inf':
      return { id: 21, name: 'Incisivo central direito inferior' }
    case 'incisivo_lateral_direito_inf':
      return { id: 22, name: 'Incisivo lateral direito inferior' }
    case 'cuspide_direito_inf':
      return { id: 23, name: 'Cuspide direito inferior' }
    case 'primeiro_pre_molar_direito_inf':
      return { id: 24, name: 'Primeiro pré molar direito inferior' }
    case 'segundo_pre_molar_direito_inf':
      return { id: 25, name: 'Segundo pré molar direito inferior' }
    case 'primeiro_molar_direito_inf':
      return { id: 26, name: 'Primeiro molar direito inferior' }
    case 'segundo_molar_direito_inf':
      return { id: 27, name: 'Segundo molar direito inferior' }
    default:
      return { id: -1, name: '' }
  }
}
