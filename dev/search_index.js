var documenterSearchIndex = {"docs":
[{"location":"Integral/integralapi/#Fractional-integral-API","page":"Fractional integral API","title":"Fractional integral API","text":"","category":"section"},{"location":"Integral/integralapi/","page":"Fractional integral API","title":"Fractional integral API","text":"FractionalCalculus.jl has a disciplinary type system, by specifying which type you want to use, you can use the relating algorithm to compute fractional differentiation and fractional integral. ","category":"page"},{"location":"Integral/integralapi/","page":"Fractional integral API","title":"Fractional integral API","text":"This page contain all of the existing API we can use for computing fractional integral.","category":"page"},{"location":"Integral/integralapi/","page":"Fractional integral API","title":"Fractional integral API","text":"FractionalCalculus.fracint","category":"page"},{"location":"Integral/integralapi/#FractionalCalculus.fracint","page":"Fractional integral API","title":"FractionalCalculus.fracint","text":"Riemann Liouville sense fractional integral\n\nfracint(f::Function, α, start_point, end_point, step_size, RL_Direct())\n\nExample:\n\njulia> fracint(x->x^5, 0.5, 0, 2.5, 1e-8, RL_Direct())\n\nRiemann_Liouville fractional integral using complex step differentiation. Returns a tuple (1.1639316474512205, 1.0183453796725215e-8), which contains the value of this derivative is 1.1639316474512205, and the error estimate is 1.0183453796725215e-8\n\n\n\n\n\nRiemann Liouville sense fractional integral with first diff known.\n\nfracint(f, fd, α, start_point, end_point, RL_Direct_First_Diff_Known())\n\nExample\n\njulia> fracint(x->x^5, x->5*x^4, 0.5, 0, 2.5, RL_Direct_First_Diff_Known())\n\nWith first order derivative known, we can directly use it in the computation of α order fraction integral\n\n\n\n\n\nRiemann Liouville sense fractional integral using piecewise interpolation.\n\nfracint(f, α, end_point, step_size, RL_Piecewise())\n\nExample\n\njulia> fracint(x->x^5, 0.5, 2.5, 0.0001, RL_Piecewise())\n\nBy deploying Piecewise interpolation to approximate the original function, with small step_size, this method is fast and take little memory allocation.\n\n\n\n\n\nRiemann Liouville sense fractional integral approximation.\n\nfracint(f, α, end_point, step_size, RLInt_Approx())\n\nExample\n\njulia> fracint(x->x^5, 0.5, 2.5, 0.0001, RLInt_Approx())\n\n\n\n\n\nRiemann Liouville sense fractional integral using Linear interpolation.\n\nfracint(f, α, end_point, step_size, RL_LinearInterp())\n\nExample\n\njulia> fracint(x->x^5, 0.5, 2.5, 0.0001, RL_LinearInterp())\n\nRL_LinearInterp is more complex but more precise.\n\n\n\n\n\n","category":"function"},{"location":"Integral/integralapi/","page":"Fractional integral API","title":"Fractional integral API","text":"FractionalCalculus.FracIntAlg","category":"page"},{"location":"Integral/integralapi/#FractionalCalculus.FracIntAlg","page":"Fractional integral API","title":"FractionalCalculus.FracIntAlg","text":"The base type of a fractional integral sense, in FractionalCalculus.jl, all of the fractional integral senses belong to FracIntAlg\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/","page":"Fractional integral API","title":"Fractional integral API","text":"FractionalCalculus.RLInt\nFractionalCalculus.RL_Direct\nFractionalCalculus.RL_Direct_First_Diff_Known\nFractionalCalculus.RL_Piecewise\nFractionalCalculus.RLInt_Approx\nFractionalCalculus.RL_LinearInterp","category":"page"},{"location":"Integral/integralapi/#FractionalCalculus.RLInt","page":"Fractional integral API","title":"FractionalCalculus.RLInt","text":"Riemann-Liouville sense fractional integral algorithms\n\nNote this two algorithms belong to direct compute, precise are ensured, but maybe cause more memory allocation and take more compilation time.\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/#FractionalCalculus.RL_Direct","page":"Fractional integral API","title":"FractionalCalculus.RL_Direct","text":"Using the direct mathematic expression:\n\n(J^αf)(t)=frac1Gamma(α) int_0^t(t-τ)^α-1f(τ)dτ\n\nBy using QuadGK calculate the integration and obtain the value.\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/#FractionalCalculus.RL_Direct_First_Diff_Known","page":"Fractional integral API","title":"FractionalCalculus.RL_Direct_First_Diff_Known","text":"With first derivative known, we can use the Riemann Liouville sense to obtain the fractional integral more effcient.\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/#FractionalCalculus.RL_Piecewise","page":"Fractional integral API","title":"FractionalCalculus.RL_Piecewise","text":"Using piecewise linear interpolation:\n\n    y_n(t)=fract-t_i+1t_i-t_i+1y(t_i)+fract-t_it_i+1-t_iy(t_i+1)\n\nConstitute the original function with the interpolation and implement the summation.\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/#FractionalCalculus.RLInt_Approx","page":"Fractional integral API","title":"FractionalCalculus.RLInt_Approx","text":"Using the Staircase approximation to approximate the original function and implement the summation.\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/#FractionalCalculus.RL_LinearInterp","page":"Fractional integral API","title":"FractionalCalculus.RL_LinearInterp","text":"Deploying the Linear Interpolation between f_j+1 and f_j, RL_LinearInterp method is more precise than RLInt_Approx.\n\n\n\n\n\n","category":"type"},{"location":"Integral/integralapi/","page":"Fractional integral API","title":"Fractional integral API","text":"FractionalCalculus.@fracint\nFractionalCalculus.@sfracint","category":"page"},{"location":"Integral/integralapi/#FractionalCalculus.@fracint","page":"Fractional integral API","title":"FractionalCalculus.@fracint","text":"@fracint(f, α, point)\n\nReturn the α-order integral of f at specific point.\n\njulia> @fracint(x->x, 0.5, 1)\n0.7522525439593486\n\n\n\n\n\n","category":"macro"},{"location":"Example/derivative/#Derivative-Example","page":"Derivative Example","title":"Derivative Example","text":"","category":"section"},{"location":"Example/derivative/","page":"Derivative Example","title":"Derivative Example","text":"Let's see how easy it is to compute the fractional calculus of a function🥳","category":"page"},{"location":"Example/derivative/","page":"Derivative Example","title":"Derivative Example","text":"using FractionalCalculus\nusing Plots\n\ntspan=collect(0:0.01:15)\n\nexamplederivative = []\n\nfor i in range(0.1, 0.9, step=0.1)\n    push!(examplederivative, fracdiff(sin, i, tspan, 0.001, RLDiff_Approx()))\nend\n\nplot(tspan, examplederivative, title=\"Different order of derivative\", linewidth=3, label=[\"α=0.1\" \"α=0.2\" \"α=0.3\" \"α=0.4\" \"α=0.5\" \"α=0.6\" \"α=0.7\" \"α=0.8\" \"α=0.9\" \"α=1\"], legend=:bottomright)","category":"page"},{"location":"Example/derivative/","page":"Derivative Example","title":"Derivative Example","text":"Here, we use Plots.jl to generate the computing result:","category":"page"},{"location":"Example/derivative/","page":"Derivative Example","title":"Derivative Example","text":"(Image: Sin fractional Derivative)","category":"page"},{"location":"Derivative/derivative/#Fractional-derivative","page":"Fractional derivative","title":"Fractional derivative","text":"","category":"section"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"Pages = [\"derivative.md\"]","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"To get start with fractional derivative, you need to know that unlike Newtonian derivatives, fractional derivative is defined via integral.","category":"page"},{"location":"Derivative/derivative/#Riemann-Liouville-sense-derivative","page":"Fractional derivative","title":"Riemann Liouville sense derivative","text":"","category":"section"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"Riemann Liouville sense derivative is bult upon the Riemann Liouville sense integral. $ aD^\\alphatf(t)=\\frac{d^n}{dt^n}\\ aD^{-(n-\\alpha)}tf(t)=\\frac{d^n}{dt^n}\\ aI^{n-\\alpha}tf(t) $","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"$","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"tD^\\alphabf(t)=\\frac{d^n}{dt^n}\\ tD^{-(n-\\alpha)}bf(t)=\\frac{d^n}{dt^n}\\ tI^{n-\\alpha}bf(t) $","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"We can use FractionalCalculus.jl to compute fractional derivative:","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"fracdiff(x->x, 0.5, 1, 0.0001, RLDiff_Approx())","category":"page"},{"location":"Derivative/derivative/#Caputo-sense-derivative","page":"Fractional derivative","title":"Caputo sense derivative","text":"","category":"section"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"In FractionalCalculus.jl, let's see, if you want to calculate the 04 order fractional derivative of f(x)=x at a x=1 with step size 00001, simply typing these:","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"fracdiff(x->x, 0.4, 1, 0.0001, Caputo_Piecewise())","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"There many types of definitions of fractional derivative, Caputo is one of these useful definitions. The Caputo fractional derivative is first be proposed in Michele Caputo's Paper, ","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"^CD_t^alpha f(t) = frac1Gamma(n-alpha)int_0^tfracf^(n)(tau)dtau(t-tau)^alpha+1-n n=lceilalpharceil","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"In FractionalCalculus.jl, we use complex step differentiation, which is also called CSD, to obtain the numerical solution in 0alpha1, so here the value of n is 1.","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"We use Cleve Moler's annotation about complex step differentiation:Complex step differentiation is a technique that employs complex arithmetic to obtain the numerical value of the first derivative of a real valued analytic function of a real variable, avoiding the loss of precision inherent in traditional finite differences.","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"We use the above information to rewrite the equation:","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"^CD^alpha_tf(t) = frac1Gamma(1-alpha)int_0^tfracf(tau)dtau(t-tau)^alpha=frac1Gamma(1-alpha)int_0^t(t-tau)^-alphafracf(tau+h)-f(tau)h dtau","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"By applying complex step differentiation, f(tau)approxfracImf(tau+ih)h, now we get:","category":"page"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"^CD^alpha_tf(t)=frac1Gamma(1-alpha)int^t_0(t-tau)^-alphafracImf(tau+ih)hdtau","category":"page"},{"location":"Derivative/derivative/#Grünwald-Letnikov-sense-derivative","page":"Fractional derivative","title":"Grünwald Letnikov sense derivative","text":"","category":"section"},{"location":"Derivative/derivative/","page":"Fractional derivative","title":"Fractional derivative","text":"D^alpha f(t)=displaystyle lim_hrightarrow0frac1h^alphasum_0leq mltinfty(-1)^m alphachoosemf(t+(alpha-m)h)","category":"page"},{"location":"#FractionalCalculus.jl","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"","category":"section"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"Hello there👋!","category":"page"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"FractionalCalculus.jl is a Julia package aiming at providing support for computing fractional derivative and fractional integral.","category":"page"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"Pages = [\"index.md\"]","category":"page"},{"location":"#Installation","page":"FractionalCalculus.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"To install FractionalCalculus, please open Julia REPL and press] key to use package mode and then type the following command:","category":"page"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"pkg> add FractionalCalculus","category":"page"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"Or if you want to experience the latest version of FractionalCalculus.jl:","category":"page"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"pkg> add FractionalCalculus#master","category":"page"},{"location":"#Features","page":"FractionalCalculus.jl","title":"Features","text":"","category":"section"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"FractionalCalculus now has algorithms for Caputo fractional derivative, Grunwald-Letnikov fractional derivative and Riemann-Liouville fractional integral support, more algorithms are planned to support to enrich the package ecosystem.","category":"page"},{"location":"#Plans","page":"FractionalCalculus.jl","title":"Plans","text":"","category":"section"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"Symbolic differentiation and integration\nFractionalCalculus.jl website with online experiencing\nAdd more visualization of how the fraction derivative and integral are changing based on Makie or Javis or Manim\nFractional differential equations","category":"page"},{"location":"#Contributing","page":"FractionalCalculus.jl","title":"Contributing","text":"","category":"section"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"The development of FractionalCalculus.jl is on GitHub, please report bugs or send pull requests to help FractionalCalculus.jl grow.","category":"page"},{"location":"#Acknowledge","page":"FractionalCalculus.jl","title":"Acknowledge","text":"","category":"section"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"FractionalCalculus.jl is built upon the hard work of many scientific researchers, I sincerely appreciate what they have done to help the development of science and technology.","category":"page"},{"location":"","page":"FractionalCalculus.jl","title":"FractionalCalculus.jl","text":"info: WIP\nFractionalCalculus.jl is under heavy construction, some API or docs might change a lot.","category":"page"},{"location":"Integral/integral/#Fractional-integral","page":"Fractional integral","title":"Fractional integral","text":"","category":"section"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"Pages = [\"integral.md\"]","category":"page"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"Fractional integral is defined as follow:","category":"page"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"_aD_t^-alphaf(t)=frac1Gamma(alpha)int_a^t(t-tau)^alpha-1f(tau)dtau","category":"page"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"In FractionalCalculus, you can compute the integral of a function with order alpha:","category":"page"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"fracint(x->x, 0.5, 0, 1, 0.0001, RL_Direct())","category":"page"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"A tuple contains result and estimating error will return","category":"page"},{"location":"Integral/integral/","page":"Fractional integral","title":"Fractional integral","text":"julia> fracint(x->x, 0.5, 0, 1, 0.0001, RL_())\n(0.7522527785271369, 8.022170098417246e-9)","category":"page"},{"location":"Integral/integral/#Linear-interpolation-to-approximate-function","page":"Fractional integral","title":"Linear interpolation to approximate function","text":"","category":"section"},{"location":"Derivative/derivativeapi/#Fractional-derivative-API","page":"Fractional derivative API","title":"Fractional derivative API","text":"","category":"section"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"FractionalCalculus.jl has a disciplinary type system, by specifying which type you want to use, you can use the relating algorithm to compute fractional differentiation and fractional integral. ","category":"page"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"This page contain all of the existing API we can use for computing fractional derivative.","category":"page"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"FractionalCalculus.fracdiff","category":"page"},{"location":"Derivative/derivativeapi/#FractionalCalculus.fracdiff","page":"Fractional derivative API","title":"FractionalCalculus.fracdiff","text":"FracDiffAlg\n\nfracdiff(f::Function, α, start_point, end_point, FracDiffAlg())\n\nExample\n\njulia> fracdiff(Function, Order, Start_Point, End_Point, AlgType)\n\nCompute the α-order fractional derivative of f from start point to end point with specific algorithm.\n\n\n\n\n\nCaputo sense fractional derivative.\n\nfracdiff(f::Function, α, start_point, end_point, step_size ::Caputo)\n\nExample:\n\njulia> fracdiff(x->x^5, 0.5, 0, 2.5, 0.0001, Caputo_Direct())\n\nReturns a tuple (result, error), which means the value of this derivative is 141.59714979764541, and the error estimate is 1.1532243848672914e-6.\n\nWhen the input end points is an array, fracdiff will compute \n\nRefer to Caputo derivative\n\n\n\n\n\nGrünwald–Letnikov sense fractional dervivative.\n\nfracdiff(f, α, start_point, end_point, GL_Direct())\n\nExample:\n\njulia> fracdiff(x->x^5, 0, 0.5, GL_Direct())\n\nPlease note Grunwald-Letnikov sense fracdiff only support 0 < α < 1.\n\nPlease refer to Grünwald–Letnikov derivative for more details.\n\n\n\n\n\nCaputo sense fractional derivative with first derivative known.\n\nfracdiff(fd, α, start_point, end_point, Caputo_Direct_First_Diff_known())\n\nIf the first order derivative of a function is already known, we can use this method to compute the fractional order derivative more precisely.\n\nThe inout function should be the first order derivative of a function\n\nExample\n\njulia> fracdiff(x->5*x^4, 0.5, 0, 2.5, Caputo_Direct_First_Diff_known())\n\nReturn the semi-derivative of f(x)=x^5 at x=25.\n\nCompared with Caputo_Direct method, this method don't need to specify step size, more precision are guaranteed.\n\n\n\n\n\nCaputo sense fractional derivative with first and second derivative known.\n\nfracdiff(fd1, fd2, α, start_point, end_point, Caputo_Direct_First_Second_Diff_Known)\n\nIf the first and second order derivative of a function is already known, we can use this method to compute the fractional order derivative more precisely.\n\nExample\n\njulia> fracdiff(x->5*x^4, x->20*x^3, 0.5, 0, 2.5, Caputo_Direct_First_Second_Diff_known())\n\nReturn the semi-derivative of f(x)=x^5 at x=25.\n\nCompared with Caputo_Direct method, this method don't need to specify step size, more precision are guaranteed.\n\n\n\n\n\nCaputo sense Piecewise algorithm\n\nfracdiff(f, α, end_point, step_size, Caputo_Piecewise())\n\nUsing the piecewise algorithm to obtain the fractional derivative at a specific point.\n\nExample\n\njulia> fracdiff(x->x^5, 0.5, 2.5, Caputo_Piecewise())\n\nReturn the fractional derivative of f(x)=x^5 at point x=25.\n\n\n\n\n\nRiemann Liouville sense derivative approximation\n\nfracdiff(f, α, end_point, step_size, RLDiff_Approx())\n\nUsing approximation to obtain fractional derivative value.\n\nExample\n\njulia> fracdiff(x->x^5, 0.5, 2.5, 0.0001, RLDiff_Approx())\n\nwarning: Warning\nThe RLDiff_Approx algorithm only support for 0 < α < 1.\n\n\n\n\n\nfracdiff(f::Union{Function, Number}, α::AbstractArray, end_point, step_size, ::GL_Finite_Difference)::Vector\n\nSupport computing for vectorized end_points input.\n\n\n\n\n\nCaputo sense Diethelm computation\n\nUsing \n\n!!!info Scope     0 < α < 1\n\n\n\n\n\n","category":"function"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"FractionalCalculus.FracDiffAlg","category":"page"},{"location":"Derivative/derivativeapi/#FractionalCalculus.FracDiffAlg","page":"Fractional derivative API","title":"FractionalCalculus.FracDiffAlg","text":"Base type of fractional differentiation algorithms, in FractionalCalculus.jl, all of the fractional derivative algorithms belong to FracDiffAlg\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"FractionalCalculus.Caputo\nFractionalCalculus.GL\nFractionalCalculus.RLDiff","category":"page"},{"location":"Derivative/derivativeapi/#FractionalCalculus.Caputo","page":"Fractional derivative API","title":"FractionalCalculus.Caputo","text":"Caputo sense fractional derivative algorithms, please refer to Caputo derivative for more details.\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/#FractionalCalculus.GL","page":"Fractional derivative API","title":"FractionalCalculus.GL","text":"Grünwald–Letnikov sense fractional derivative algorithms, please refer to Grünwald–Letnikov derivative for more details\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/#FractionalCalculus.RLDiff","page":"Fractional derivative API","title":"FractionalCalculus.RLDiff","text":"Riemann-Liouville sense fractional derivative algorithms, please refer to Riemann-Liouville derivative\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"FractionalCalculus.Caputo_Direct\nFractionalCalculus.Caputo_Direct_First_Diff_Known\nFractionalCalculus.Caputo_Direct_Second_Diff_Known\nFractionalCalculus.Caputo_Piecewise\nFractionalCalculus.GL_Direct\nFractionalCalculus.RLDiff_Approx","category":"page"},{"location":"Derivative/derivativeapi/#FractionalCalculus.Caputo_Direct","page":"Fractional derivative API","title":"FractionalCalculus.Caputo_Direct","text":"Note Caputo Direct algorithms belong to direct computing, precise are ensured, but maybe cause more memory allocation and take more compilation time.\n\nUsing the direct mathematic expression:\n\n^CD_t^α=frac1Gamma(n-α)int_0^tfracf^(n)(τ)(t-τ)^α+1-n\n\nAs for the derivative inside the integral, we use the Complex Step Differentiation to obtain a more accurate value.\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/#FractionalCalculus.Caputo_Piecewise","page":"Fractional derivative API","title":"FractionalCalculus.Caputo_Piecewise","text":"Using piecewise linear interpolation function to approximate input function and combining Caputo derivative then implement summation.\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/#FractionalCalculus.GL_Direct","page":"Fractional derivative API","title":"FractionalCalculus.GL_Direct","text":"Grunwald Letnikov direct compute method to obtain fractional derivative, precision are guaranteed but cause more memory allocation and compilation time.\n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/#FractionalCalculus.RLDiff_Approx","page":"Fractional derivative API","title":"FractionalCalculus.RLDiff_Approx","text":"Riemann Liouville \n\n\n\n\n\n","category":"type"},{"location":"Derivative/derivativeapi/","page":"Fractional derivative API","title":"Fractional derivative API","text":"FractionalCalculus.@fracdiff\nFractionalCalculus.@semifracdiff","category":"page"},{"location":"Derivative/derivativeapi/#FractionalCalculus.@fracdiff","page":"Fractional derivative API","title":"FractionalCalculus.@fracdiff","text":"@fracdiff(f, α, point)\n\nReturn the α-order derivative of f at specific point.\n\njulia> @fracdiff(x->x, 0.5, 1)\n1.1283791670955188\n\n\n\n\n\n","category":"macro"},{"location":"Derivative/derivativeapi/#FractionalCalculus.@semifracdiff","page":"Fractional derivative API","title":"FractionalCalculus.@semifracdiff","text":"@semifracdiff(f, point)\n\nReturn the semi-derivative of f at spedific point.\n\njulia> @semifracdiff(x->x, 1)\n1.1283791670955188\n\n\n\n\n\n","category":"macro"}]
}
