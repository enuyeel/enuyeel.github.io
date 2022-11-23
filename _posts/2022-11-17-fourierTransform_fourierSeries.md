---
layout: post
title: "Fourier Transform & Fourier Series (WIP)"
permalink: /blog/:year/:month/:day/:title
---

Fourier transform of $$f(t)$$:

$$\mathcal{F}{(f(t))}=\mathcal{F}{(\mu)}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

<br>

***

<br>

Sifting property of the unit impulse function:
*[TODO : Brief explanation on Dirac delta (Kronecker, unit impulse) function.]*
*[TODO : A simple graph for the unit impulse function.]*

$$\int_{-\infty }^{\infty }\delta(t)dt=1$$

$$\int_{-\infty }^{\infty }\delta(t)\cdot f(t)dt=f(0)$$

$$\int_{-\infty }^{\infty }\delta(t)\cdot f(t-t_0)dt=f(t_0)$$

<br>

***

<br>

Fourier transform of box function:
*[TODO : A simple graph for the box function.]*

$$f(t)=\begin{cases}
A, -\frac{W}{2}\le t \le \frac{W}{2}\\
0, otherwise
\end{cases}$$

<br>

***

<br>

Fourier transform of the unit impulse function:
*[TODO : A simple graph for the unit impulse function.]*

$$\delta(t)=\begin{cases}
\infty, t=0\\
0, otherwise
\end{cases}$$

$$\mathcal{F}{(f(t))}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }\delta(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{-i2\pi\mu t}\cdot \delta(t)dt$$

Sifting property of the unit impulse function:

$$=e^{-i2\pi\mu0}=e^{0}=1$$

<br>

***

<br>

Fourier transform of the generalized unit impulse function:
*[TODO : A simple graph for the generalized unit impulse function.]*

$$\delta(t-t_0)=\begin{cases}
\infty, t=t_0\\
0, otherwise
\end{cases}$$

$$\mathcal{F}{(f(t))}=\mathcal{F}(\mu)=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }\delta(t-t_0)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{-i2\pi\mu t}\cdot \delta(t-t_0)dt$$

Sifting property of the unit impulse function:

$$=e^{-i2\pi\mu t_0}$$

$$=cos(-2\pi\mu t_0)+isin(-2\pi\mu t_0)$$

Cosine of conjugate angle, and sine of conjugate angle:

$$=cos(2\pi\mu t_0)-isin(2\pi\mu t_0)$$

<br>

***

<br>

Fourier transform of $$f(t-t_0)$$:

$$\mathcal{F}{(f(t))}=\mathcal{F}(\mu)=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

Substituting $$f(t)$$ with $$f(t\mp t_0)$$, we get:

$$\mathcal{F}{(f(t\mp t_0))}=\mathcal{F}(\mu)=\int_{-\infty }^{\infty }f(t\mp t_0)\cdot e^{-i2\pi\mu t}dt$$

Let $$t'=t\mp t_0\to t=t'\pm t_0$$:

$$=\int_{-\infty }^{\infty }f(t')\cdot e^{-i2\pi\mu (t'\pm t_0)}dt'$$

$$=\int_{-\infty }^{\infty }f(t')\cdot e^{-i2\pi\mu t'}\cdot e^{\mp i2\pi\mu t_0}dt'$$

$$=e^{\mp i2\pi\mu t_0}\int_{-\infty }^{\infty }f(t')\cdot e^{-i2\pi\mu t'}dt'$$

$$=e^{\mp i2\pi\mu t_0}\mathcal{F}{(\mu)}$$

$$=e^{i2\pi\mu (\mp t_0)}\mathcal{F}{(\mu)}$$

<br>

***

<br>

Fourier transform of $$f(t)=e^{in\frac{2\pi}{\Delta T}t}$$: 
*[TODO : A simple graph for $$\delta(\mu-\frac{n}{\Delta T})$$.]*

$$f(t)=e^{in\frac{2\pi}{\Delta T}t}$$

$$\mathcal{F}{(f(t))}=\mathcal{F}{(\mu)}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{in\frac{2\pi}{\Delta T}t}\cdot e^{-i2\pi \mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{-i2\pi(\mu-\frac{n}{\Delta T})t}dt$$

Let $$\omega=\mu-\frac{n}{\Delta T}$$:

$$\mathcal{F}{(\mu)}=\mathcal{F}{(\omega)}=\int_{-\infty }^{\infty }e^{-i2\pi\omega t}dt=\int_{-\infty }^{\infty }1\cdot e^{-i2\pi\omega t}dt$$

<font color='green'>TODO : Fourier transform of \(1\), is a unit impulse function \(\delta(\omega)\), and the Fourier transform of a unit impulse function is \(1\).</font>

$$=\delta(\omega)=\delta(\mu-\frac{n}{\Delta T})$$

$$=\mathcal{F}{(f(t))}=\mathcal{F}{(e^{in\frac{2\pi}{\Delta T}t})}$$

<br>

***

<br>

**[SPW3]**

Definition of the impulse train function: 
*[TODO : A simple graph for the impulse train function.]*

$$f(t)=\cdots+\delta(t+2\Delta T)+\delta(t+\Delta T)+\delta(t)+\delta(t-\Delta T)+\delta(t-2\Delta T)+\cdots$$

$$S_{\Delta T}(t)=\sum_{n=-\infty}^{\infty}\delta(t-n\Delta T)$$

Fourier series:
*[TODO : Definition of Fourier series.]*

$$S_{\Delta T}(t)=\sum_{n=-\infty}^{\infty}c_n\cdot e^{in\frac{2\pi}{\Delta T}t}$$

<font color='green'>TODO : Which range to choose from, when perform Fourier transform? \([-\frac{\Delta T}{2}, \frac{\Delta T}{2}]\) or \([0, \Delta T]\)? Since Fourier transform assumes its function to be periodic, a Fourier coefficient calculated for the given period of a function can be applied to infinite range?</font>

Fourier transform of $$f(t)$$:
*[TODO : Explain a bit on a slight different form of Fourier transform, and possibly mention inner product to yield Fourier coefficient.]*

$$c_n=\frac{1}{\Delta T}\int_{-\frac{\Delta T}{2}}^{\frac{\Delta T}{2}}S_{\Delta T}(t)\cdot e^{-in\frac{2\pi}{\Delta T}t}dt$$

*[TODO : Show how $$S_{\Delta T}(t)$$ can be substituted with $$\delta(t)$$ with graph.]*

$$c_n=\frac{1}{\Delta T}\int_{-\frac{\Delta T}{2}}^{\frac{\Delta T}{2}}\delta(t)\cdot e^{-in\frac{2\pi}{\Delta T}t}dt$$

$$c_n=\frac{1}{\Delta T}\int_{-\frac{\Delta T}{2}}^{\frac{\Delta T}{2}}e^{-in\frac{2\pi}{\Delta T}t}\cdot \delta(t)dt$$

*[TODO : Using sifting property of impulses.]* <br>

$$=\frac{1}{\Delta T}\cdot e^{-in\frac{2\pi}{\Delta T}0}=e^{0}=\frac{1}{\Delta T}$$

<br>

*[TODO : Now that we've computed a Fourier coefficient(s) for the impulse train function, derive Fourier Transform of the impulse train via Fourier Series.]* <br>

$$S_{\Delta T}(t)=\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}e^{in\frac{2\pi}{\Delta T}t}$$

$$\mathcal{F}(S_{\Delta T}(t))=\mathcal{F}(\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}e^{in\frac{2\pi}{\Delta T}t})$$

$$=\frac{1}{\Delta T}\mathcal{F}(\sum_{n=-\infty}^{\infty}e^{in\frac{2\pi}{\Delta T}t})$$

$$=\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}\mathcal{F}(e^{in\frac{2\pi}{\Delta T}t})$$

Fourier transform of $$f(t)=e^{in\frac{2\pi}{\Delta T}t}$$: $$\mathcal{F}{(f(t))}=\mathcal{F}{(e^{in\frac{2\pi}{\Delta T}t})}=\delta(\mu-\frac{n}{\Delta T})$$

$$=\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}\mathcal\delta(\mu-\frac{n}{\Delta T})$$

<br>

***

<br>

Convolution theorem:

<br>

Definition of convolution $$\cdots\ \textbf{1}$$

$$f(t)*h(t)=\int_{-\infty}^{\infty}f(w)\cdot h(t-w)dw$$

$$\mathcal{F}(f(t)*h(t))=\int_{-\infty}^{\infty}(f(t)*h(t))\cdot e^{-j2\pi\mu t}dt$$

Using definition of convolution from $$\textbf{1}$$:

$$=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(w)\cdot h(t-w)dw\ e^{-j2\pi\mu t}dt$$

$$=\int_{-\infty}^{\infty}f(w)\int_{-\infty}^{\infty}h(t-w)\cdot e^{-j2\pi\mu t}dt\ dw$$

Fourier transform of $$f(t-t_0)$$: $$\mathcal{F}{(f(t\mp t_0))}=e^{i2\pi\mu (\mp t_0)}\mathcal{F}{(\mu)}$$

$$=\int_{-\infty}^{\infty}f(w)\cdot \mathcal{H}(\mu)\cdot e^{-i2\pi \mu \omega}dw$$

$$=\mathcal{H}(\mu)\cdot\int_{-\infty}^{\infty}f(w)\cdot e^{-i2\pi \mu \omega}dw$$

Fourier transform of $$f(t)$$: $$\mathcal{F}{(f(t))}=\mathcal{F}{(\mu)}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\mathcal{H}(\mu)\cdot\mathcal{F}(\mu)$$

<br>

***

<br>

- [Fourier Transform of $$1$$](https://proofwiki.org/wiki/Fourier_Transform_of_1)
