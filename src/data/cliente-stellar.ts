export const Paso1 = `
brew install stellar-cli

`

export const Paso2 = `
# Caso de x86_64
wget https://github.com/stellar/stellar-cli/releases/download/v22.6.0/stellar-cli-22.6.0-x86_64-unknown-linux-gnu.tar.gz

# Caso de arch64
wget https://github.com/stellar/stellar-cli/releases/download/v22.6.0/stellar-cli-22.6.0-aarch64-unknown-linux-gnu.tar.gz 

`

export const Paso3 = `
#caso x86_64
tar -xvf stellar-cli-22.6.0-x86_64-unknown-linux-gnu.tar.gz

# Caso de arch64
tar -xvf stellar-cli-22.6.0-aarch64-unknown-linux-gnu.tar.gz
`

export const Paso4 = `
sudo mv stellar /usr/local/bin/ && sudo chmod +x /usr/local/bin/stellar
`

export const Paso5 = `
stellar --version
`

export const Paso6 = `
winget install --id Stellar.StellarCLI `

export const Paso7 = `
stellar
`

