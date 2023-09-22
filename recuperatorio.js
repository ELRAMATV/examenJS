function iva (valorproducto)
{
    return valorproducto * 21 / 100
}
console.log (iva(120))

function descuentoiva(valorproducto)
{
    return valorproducto - iva(120)
}
console.log (descuentoiva(120))