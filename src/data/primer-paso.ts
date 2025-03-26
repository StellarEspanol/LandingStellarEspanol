export const PrimerPaso = `

stellar keys generate --global developer --network testnet --fund

`

export const PrimerPaso2 = `
cat /home/<USUARIO>/.config/stellar/identity/developer.toml

`

export const PrimerPaso3 = `
stellar keys address developer
`


export const PrimerPaso4 = `

stellar contract id asset --asset native --network testnet

`

export const PrimerPaso5 = `

stellar keys address developer
`

export const PrimerPaso6 = `

stellar contract invoke --id "dirección XLM" --network testnet --source-account developer -- balance --id "llave pública developer"

`

export const PrimerPaso7 = `

stellar contract invoke --id CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC 
--network testnet --source-account developer 
-- balance --id GD45T2VRMYBSGRHLMVTS4QQZVXAM7WD6IYWKYRS7DFURRR2EKWCNGOAN

`
