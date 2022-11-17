---
layout: post
title: "Fourier Transform & Fourier Series (WIP)"
permalink: /blog/:year/:month/:day/:title
---

*[TODO : Introduction.]* <br>

$$\mathcal{F}{(f(t))}=\mathcal{F}{(\mu)}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

<br>

*[TODO : Sifting property explanation.]* <br>

$$\int_{-\infty }^{\infty }\delta(t)dt=1$$

$$\int_{-\infty }^{\infty }\delta(t)\cdot f(t)dt=f(0)$$

$$\int_{-\infty }^{\infty }\delta(t)\cdot f(t-t_0)dt=f(t_0)$$

<br>

*[TODO : Fourier transform of box function, and its derivation steps.]* <br>

$$f(t)=\begin{cases}
A, -\frac{W}{2}\le t \le \frac{W}{2}\\
0, otherwise
\end{cases}$$

*[TODO : Brief explanation on Dirac delta (Kronecker, unit impulse) function.]* <br>
*[TODO : Fourier transform of the unit impulse function, and its derivation steps.]* <br>

<br>

$$\delta(t)=\begin{cases}
\infty, t=0\\
0, otherwise
\end{cases}$$

$$\mathcal{F}{(f(t))}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }\delta(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{-i2\pi\mu t}\cdot \delta(t)dt$$

*[TODO : Using sifting property of impulses.]* <br>

$$=e^{-i2\pi\mu0}=e^{0}=1$$

<br>

*[TODO : Fourier transform of the generalized unit impulse function, and its derivation steps.]* <br>

$$\delta(t-t_0)=\begin{cases}
\infty, t=t_0\\
0, otherwise
\end{cases}$$

<br>

*[TODO : Fourier transform of $$f(t-t_0)$$, and its derivation steps.]* <br>

<br>

*[TODO : Fourier transform of $$f(t)=e^{\frac{i2\pi n}{\Delta T}t}$$, and its derivation steps. A simple graph for $$\delta(\mu-\frac{n}{\Delta T})$$ is a plus.]*

$$f(t)=e^{\frac{i2\pi n}{\Delta T}t}$$

$$\mathcal{F}{(f(t))}=\mathcal{F}{(\mu)}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{\frac{i2\pi n}{\Delta T}t}\cdot e^{-i2\pi \mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{-i2\pi(\mu-\frac{n}{\Delta T})t}dt$$

$$\omega=\mu-\frac{n}{\Delta T}$$

$$\mathcal{F}{(\mu)}=\mathcal{F}{(\omega)}=\int_{-\infty }^{\infty }e^{-i2\pi\omega t}dt=\int_{-\infty }^{\infty }1\cdot e^{-i2\pi\omega t}dt$$

$$=\delta(\omega)=\delta(\mu-\frac{n}{\Delta T})$$

$$=\mathcal{F}{(f(t))}=\mathcal{F}{(e^{\frac{i2\pi n}{\Delta T}t})}$$

<br>

*[TODO : Define the impulse train function. A simple graph for the impulse train is a plus.]*

$$f(t)=\cdots+\delta(t+2\Delta T)+\delta(t+\Delta T)+\delta(t)+\delta(t-\Delta T)+\delta(t-2\Delta T)+\cdots$$

$$S_{\Delta T}(t)=\sum_{n=-\infty}^{\infty}\delta(t-n\Delta T)$$

$$S_{\Delta T}(t)=\sum_{n=-\infty}^{\infty}c_n\cdot e^{i\frac{2\pi n}{\Delta T}t}$$

$$c_n=\frac{1}{\Delta T}\int_{-\frac{\Delta T}{2}}^{\frac{\Delta T}{2}}S_{\Delta T}(t)\cdot e^{-i\frac{2\pi n}{\Delta T}t}dt$$

*[TODO : Show how $$S_{\Delta T}(t)$$ can be substituted with $$\delta(t)$$ with graph.]*

$$c_n=\frac{1}{\Delta T}\int_{-\frac{\Delta T}{2}}^{\frac{\Delta T}{2}}\delta(t)\cdot e^{-i\frac{2\pi n}{\Delta T}t}dt$$

$$c_n=\frac{1}{\Delta T}\int_{-\frac{\Delta T}{2}}^{\frac{\Delta T}{2}}e^{-i\frac{2\pi n}{\Delta T}t}\cdot \delta(t)dt$$

*[TODO : Using sifting property of impulses.]* <br>

$$=\frac{1}{\Delta T}\cdot e^{-i\frac{2\pi n}{\Delta T}0}=e^{0}=\frac{1}{\Delta T}$$

<br>

*[TODO : Now that we've computed a Fourier coefficient(s) for the impulse train function, derive Fourier Transform of the impulse train via Fourier Series.]* <br>

$$S_{\Delta T}(t)=\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}e^{i\frac{2\pi n}{\Delta T}t}$$

$$\mathcal{F}(S_{\Delta T}(t))=\mathcal{F}(\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}e^{i\frac{2\pi n}{\Delta T}t})$$

$$=\frac{1}{\Delta T}\mathcal{F}(\sum_{n=-\infty}^{\infty}e^{i\frac{2\pi n}{\Delta T}t})$$

$$=\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}\mathcal{F}(e^{i\frac{2\pi n}{\Delta T}t})$$

$$=\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}\mathcal\delta(\mu-\frac{n}{\Delta T})$$

*[TODO : This concludes that the Fourier transform of $$S_{\Delta T}(t)$$, or $$\sum_{n=-\infty}^{\infty}\delta(t-n\Delta T)$$ is $$\frac{1}{\Delta T}\sum_{n=-\infty}^{\infty}\mathcal\delta(\mu-\frac{n}{\Delta T})$$.]* <br>
