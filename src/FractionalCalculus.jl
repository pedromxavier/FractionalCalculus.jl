module FractionalCalculus

using QuadGK
using SpecialFunctions: gamma
using LinearAlgebra, InvertedIndices, SpecialMatrices

include("./Derivative/Derivative.jl")
include("./Integral/Integral.jl")

export FracDiffAlg, FracIntAlg
export fracdiff, fracint

# Export fractional derivative releating API
export Caputo, GL, RLDiff, Hadamard

# Caputo sense fractional derivative
export Caputo_Direct
export Caputo_Piecewise
export Caputo_Diethelm
export Caputo_High_Precision

# Grünwald Letnikov sense fractional derivative
export GL_Direct, GL_Multiplicative_Additive, GL_Lagrange_Three_Point_Interp, GL_High_Precision

# Riemann Liouville sense fractional derivative
export RLDiff_Approx, RLDiff_Matrix, RL_Linear_Spline_Interp, RL_G1, RL_D

# Hadamard sense fractional derivative
export Hadamard_LRect, Hadamard_RRect, Hadamard_Trap

# Riesz sense fractional derivative
export Riesz_Symmetric

# Macros for convenient computing
export @fracdiff, @semifracdiff

#Export fractional integral relating API
export RLInt
export RL_Direct, RL_Piecewise
export RLInt_Approx, RL_LinearInterp, RLInt_Matrix
export RLInt_Simpson, RLInt_Trapezoidal, RLInt_Rectangular, RLInt_Cubic_Spline_Interp


# Macros for convenient computing
export @fracint, @semifracint

end