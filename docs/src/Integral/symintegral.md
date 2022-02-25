# Symbolic Fractional Integral

Similiar with symbolic fractional differentiation in FractionalCalculus.jl, we first define fractional integral rules to implement symbolic fractional integral computing.

All we have to do is to call the ```semiint``` function:

```julia-repl
julia> semiint(x^2)
0.6018022224509401(x^2.5)
```