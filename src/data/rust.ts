export const RustLinux = `
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
`

export const Paso3Rust = `
source $HOME/.cargo/env
`

export const Paso4Rust = `
rustc --version
`

export const Paso5Rust = `
rustup target add wasm32-unknown-unknown
`


export const Paso6Rust = `

xcode-select --install
`

export const Paso7Rust = `

sudo apt-get update
sudo apt-get install build-essential
`

export const Paso8Rust = `
sudo dnf update
sudo dnf install make automake gcc gcc-c++ kernel-devel
`

export const Paso9Rust = `
sudo pacman -Syu
sudo pacman -S base-devel
`

export const Paso10Rust = `
rustup toolchain install stable-x86_64-pc-windows-gnu
rustup default stable-x86_64-pc-windows-gnu
rustup target add wasm32-unknown-unknown
`
