---
layout: post
title: "Fourier Series, and Xform"
permalink: /blog/:year/:month/:day/:title
---

**Fourier Series**

<br>

A Fourier series is a periodic function $$f(t)$$ represented by infinite sums of sinusoids. Given the period $$T$$, and the Fourier coefficient $$c_k$$, its formula in complex form is written as follows:

$$f(t)=\sum_{k=-\infty}^{\infty}c_k\cdot e^{i2\pi\frac{k}{T}t}$$

It might not be too obvious how this formula lives up to its definition in its complex form, so we’ll first try to rewrite this to a real form.

<br>

Before we start breaking down the original formula, let me gloss over the details of the Fourier coefficient $$c_k$$ for now, and let’s treat it like an ordinary complex number. Following is its formula in the complex form:

$$c_k=\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\cdot e^{-i2\pi\frac{k}{T}t}dt$$

By judging from its formula, the Fourier coefficient $$c_k$$ is a continuous sum (integral) of products between real number $$f(t)$$ and complex exponential term $$e^{-i2\pi\frac{k}{T}t}$$ over the range [$$-\frac{T}{2}$$,$$\frac{T}{2}$$]. 

<br>

Immediately, we can check out that its complex conjugate $$\overline{c_k}$$ is equivalent to $$c_{-k}$$. Here's a short [**proof**](https://proofwiki.org/wiki/Exponential_Form_of_Complex_Conjugate) on that matter.

$$\overline{c_k}=c_{-k}=\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\cdot e^{i2\pi\frac{k}{T}t}dt$$

Then, we can start rewriting the complex Fourier series:

$$f(t)=\sum_{k=-\infty}^{\infty}c_k\cdot e^{i2\pi\frac{k}{T}t}$$

$$=c_0+\sum_{k=1}^{\infty}(c_k\cdot e^{i2\pi\frac{k}{T}t}+c_{-k}\cdot e^{-i2\pi\frac{k}{T}t})\cdots (1)$$

$$=c_0+\sum_{k=1}^{\infty}(c_k\cdot e^{i2\pi\frac{k}{T}t}+\overline{c_{k}\cdot e^{i2\pi\frac{k}{T}t}})$$

Now, consider the sum of a complex number $$z$$ ($$a+bi$$) and its conjugate $$\overline{z}$$ is two times the real part of the complex number:

$$z+\overline{z}=(a+bi)+(a-bi)=2a=2\cdot \mathcal{Re}\left\{ z \right\}$$

We continue rewriting:

$$=c_0+\sum_{k=1}^{\infty}2\cdot \mathcal{Re}\left\{ c_k\cdot e^{i2\pi\frac{k}{T}t} \right\}$$

Recall that we’re going to treat $$c_k$$ just like any ordinary complex number for now. Let $$c_k=a_k+b_ki$$:

$$=c_0+\sum_{k=1}^{\infty}2\cdot \mathcal{Re}\left\{ (a_k+b_ki)\cdot e^{i2\pi\frac{k}{T}t} \right\}$$

We can replace the complex exponential term $$e^{i2\pi\frac{k}{T}t}$$ with a complex trigonometric form as follows given Euler's formula $$e^{ix}=cos(x)+sin(x)\cdot i$$:

$$=c_0+\sum_{k=1}^{\infty}2\cdot \mathcal{Re}\left\{ (a_k+b_ki)\cdot (cos(2\pi\frac{k}{T}t)+sin(2\pi\frac{k}{T}t)i) \right\}$$

$$=c_0+2\sum_{k=1}^{\infty}\left\{ a_k\cdot cos(2\pi\frac{k}{T}t)-b_k\cdot sin(2\pi\frac{k}{T}t) \right\}$$

This is the real Fourier series, and the discrete variable $$k$$ here controls the sine and the cosine wave to have a unique frequency in each iteration, while the Fourier coefficient $$a_k$$ and $$b_k$$ represents the amplitude for the corresponding sinusoid. 

<br>

More on the details of the Fourier coefficient in the next section, but for now, consider the resulting sinusoid after the linear combination of a sine and a cosine wave should give us one of the components that contribute to the construction of the original signal $$f(t)$$. 

<br>

It is worth noting that adding together a sine and a cosine wave of the same period should produce another sinusoid with a change in amplitude and a phase shift. 

<br>

There’s an additional representation of the real Fourier series, and it’s coming from the observation that the complex number in the Cartesian form $$a+bi$$ can be converted to the polar form $$re^{i\theta}$$.

<br>

As a refresher, $$r$$ represents the magnitude of the vector plot of the complex number in the complex plane, while the $$\theta$$ represents the phase, which is the angle between the vector and the positive real axis. 

<br>

Given the Fourier coefficient $$c_k$$ $$(a_k+b_ki)$$ in the Cartesian form, we can calculate its magnitude and the phase to rewrite $$c_k$$ as follows:

$$r=\sqrt{a_k^2+b_k^2}$$

$$\theta=tan^{-1}(\frac{b_k}{a_k})$$

$$c_k=a_k+b_ki=re^{i\theta}=\sqrt{a_k^2+b_k^2}\cdot e^{i\cdot tan^{-1}(\frac{b_k}{a_k})}$$

Then, we can rewrite the $$(1)$$ as follows:

$$f(t)=c_0+\sum_{k=1}^{\infty}(c_k\cdot e^{i2\pi\frac{k}{T}t}+c_{-k}\cdot e^{-i2\pi\frac{k}{T}t})$$

$$=c_0+\sum_{k=1}^{\infty}(\sqrt{a_k^2+b_k^2}\cdot e^{i(2\pi\frac{k}{T}t+tan^{-1}(\frac{b_k}{a_k}))}+\sqrt{a_k^2+b_k^2}\cdot e^{-i(2\pi\frac{k}{T}t+tan^{-1}(\frac{b_k}{a_k}))})$$

Rewrite it with the property $$cos(\theta)=\frac{e^{i\theta}+e^{-i\theta}}{2}$$ derived from Euler’s formula:

$$=c_0+2\sum_{k=1}^{\infty}(\sqrt{a_k^2+b_k^2}\cdot cos{(2\pi\frac{k}{T}t+tan^{-1}(\frac{b_k}{a_k}))})$$

This is identical to the real Fourier series we derived earlier but less confusing to our eyes since it involves only a single cosine function. 

<br>

One little catch here is that there’s now an explicit phase shift term $$tan^{-1}(\frac{b_k}{a_k})$$, which was rather implicitly suggested in the earlier form. 

<br>

We’re finally going to tackle the Fourier coefficient $$c_k$$, and we’ll first rewrite the original formula into a complex trigonometric form as follows:

$$c_k=\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\cdot e^{-i2\pi\frac{k}{T}t}dt$$

$$=\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\cdot (cos(2\pi\frac{k}{T}t)-sin(2\pi\frac{k}{T}t)\cdot i)dt$$

This is going to be a recurring concept for the Fourier transform as well, which we haven’t discussed yet, but if you want to know how much a sinusoid of a particular frequency contributes to an original signal, try multiplying the said signal with the original signal at each point to yield a new curve. 

<br>

If the frequency of a particular sinusoid matches that of the original signal, or in other words, matches one of its components’ frequency, the area under the curve is going to be a positive number.

<br>

Following is the collection of integral formulas that goes by the name ‘orthogonality relations’, and they can be used to demonstrate the concept we briefly discussed above. $$k$$ and $$n$$ below are natural numbers.

$$\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{k}{T}t)\cdot cos(2\pi\frac{n}{T}t)dt=\begin{cases}
\frac{1}{2}, k=n\neq 0\\
0, k\neq n\\
1, k=n=0
\end{cases}\cdots (2.1)$$

$$\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{n}{T}t)dt=0\cdots (2.2)$$

$$\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}sin(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{n}{T}t)dt=\begin{cases}
\frac{1}{2}, k=n\neq 0\\
0, k\neq n\\
\end{cases}\cdots (2.3)$$

There are a few ways to prove the above relations, and I used trigonometric identities. The other possible approach is using Euler’s formula.

$$\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{k}{T}t)\cdot cos(2\pi\frac{n}{T}t)dt\cdots (2.1)$$

Rewrite it with the trigonometric property $$cos(\alpha)\cdot cos(\beta)=\frac{1}{2}\cdot (cos(\alpha-\beta)+cos(\alpha+\beta))$$:

$$=\frac{1}{2T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{k}{T}t-2\pi\frac{n}{T}t)+cos(2\pi\frac{k}{T}t+2\pi\frac{n}{T}t)dt$$

$$=\frac{1}{2T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{t}{T}(k-n))+cos(2\pi\frac{t}{T}(k+n))dt=\begin{cases}
\frac{1}{2}, k=n\neq 0\\
0, k\neq n\\
1, k=n=0
\end{cases}$$

We can now manually plug in random natural numbers to $$n$$ and $$k$$ in this integral formula to verify the result for each case. 

<br>

Considering the integration of any sinusoid over one period equals $$0$$, we can see that the resulting values do indeed check out. You can go ahead and follow the same eyeballing scheme to verify the rest of the formulas below.

<br>

$$\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{n}{T}t)dt\cdots (2.2)$$

Rewrite it with the trigonometric property $$cos(\alpha)\cdot sin(\beta)=\frac{1}{2}\cdot (sin(\alpha+\beta)-sin(\alpha-\beta))$$:

$$=\frac{1}{2T}\int_{-\frac{T}{2}}^{\frac{T}{2}}sin(2\pi\frac{k}{T}t+2\pi\frac{n}{T}t)-sin(2\pi\frac{k}{T}t-2\pi\frac{n}{T}t)dt$$

$$=\frac{1}{2T}\int_{-\frac{T}{2}}^{\frac{T}{2}}sin(2\pi\frac{t}{T}(k+n))-sin(2\pi\frac{t}{T}(k-n))dt=0$$

<br>

$$\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}sin(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{n}{T}t)dt\cdots (2.3)$$

Rewrite it with the trigonometric property $$sin(\alpha)\cdot sin(\beta)=\frac{1}{2}\cdot (cos(\alpha-\beta)-cos(\alpha+\beta))$$:

$$=\frac{1}{2T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{k}{T}t-2\pi\frac{n}{T}t)-cos(2\pi\frac{k}{T}t+2\pi\frac{n}{T}t)dt$$

$$=\frac{1}{2T}\int_{-\frac{T}{2}}^{\frac{T}{2}}cos(2\pi\frac{t}{T}(k-n))-cos(2\pi\frac{t}{T}(k+n))dt=\begin{cases}
\frac{1}{2}, k=n\neq 0\\
0, k\neq n\\
\end{cases}$$

<br>

Now we can go ahead and calculate a random Fourier coefficient of our choice to see how it expands with the above relations. I have picked $$b_2$$ for my convenience.

$$L.H.S\;b_2=-\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\cdot sin(2\pi\frac{2}{T}t)dt$$

Replace $$f(t)$$ with the Fourier series we derived earlier:

$$=-\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}\left[  c_0+2\sum_{k=1}^{\infty}\left\{ a_k\cdot cos(2\pi\frac{k}{T}t)-b_k\cdot sin(2\pi\frac{k}{T}t) \right\}\right]\cdot sin(2\pi\frac{2}{T}t)dt$$

$$=-\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}c_0\cdot sin(2\pi\frac{2}{T}t)+2\sum_{k=1}^{\infty}\left\{ a_k\cdot cos(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{2}{T}t)-b_k\cdot sin(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{2}{T}t) \right\}dt$$

$$=-\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}2\sum_{k=1}^{\infty}\left\{ -b_k\cdot sin(2\pi\frac{k}{T}t)\cdot sin(2\pi\frac{2}{T}t) \right\}dt$$

$$=2\cdot b_2\cdot\frac{1}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}sin(2\pi\frac{2}{T}t)\cdot sin(2\pi\frac{2}{T}t)dt=2\cdot b_2\cdot\frac{1}{2}=R.H.S\;b_2$$

We can check out that most of the terms in this formula cancel out (integrate to 0), giving us $$b_2$$, which is equivalent to the left-hand side $$b_2$$ we started with.

<br>

***

<br>

**Fourier Transform**

<br>

Let’s imagine a scenario where we lengthen the period $$T$$ for our periodic function $$f(t)$$, and try computing the Fourier series. 

<br>

In other words, calculate the Fourier coefficients $$c_k$$ for a set of points and try plotting a discrete graph, and repeat the procedure for different periods.

<br>

Here’s a [**link**](https://www.desmos.com/calculator/kaorbs6hnc) to the visual aid. It graphs out a few sets of Fourier coefficients for a simple periodic pulse function in the frequency domain. Our function $$f(t)$$ is defined as follows:

$$f(t)=\begin{cases}
1, \left| t \right|\le \frac{\pi}{2}\\
0, otherwise
\end{cases}\;-\frac{T}{2}<t\le\frac{T}{2}$$

A frequency domain, in short, is where the horizontal axis represents the frequency ($$2\pi\frac{k}{T}$$ in this case), while the vertical axis represents the amplitude. Luckily, $$c_k$$ this time only has the real part. 

<br>

Right off the bat, one can observe that as the period $$T$$ increases, the spacing between frequencies decreases, which gives a discrete graph a more definite shape. 

<br>

The other important observation to make is that as the period gets arbitrarily larger, amplitudes tend to effectively go to zero. We can compensate for this by multiplying the original Fourier coefficient formula by the period $$T$$, which gives us a scaled version of the formula.

$$T\cdot c_k=\int_{-\frac{T}{2}}^{\frac{T}{2}}f(t)\cdot e^{-i2\pi\frac{k}{T}t}dt$$

Then, if we change the bounds of integration from $$[-\frac{T}{2},\frac{T}{2}]$$ to $$[-\infty,\infty]$$ to make up for the fact that now the period $$T$$ is arbitrarily large, and replace the discrete variable $$\frac{k}{T}$$ with a continuous variable $$\mu$$, we end up with a Fourier Transform equation:

$$\mathcal{F}{(f(t))}=\mathcal{F}{(\mu)}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt$$

We can understand an aperiodic function as a periodic signal with an arbitrarily large period that’s padded with zeros outside the range it’s defined for; a periodization of an aperiodic signal if simply put.

<br>

Considering that the Fourier series doesn’t exist for aperiodic functions, roughly speaking, we’re now provided with a tool that executes the same job as the Fourier series but works for aperiodic functions in general (precisely speaking, only the first part where we find the amplitude for each of the component sinusoid).

<br>

Now to reconstruct a signal in the time domain with amplitudes information in the frequency domain, we perform an inverse Fourier transform.

<br>

It can be interpreted as a continuous version of the Fourier series, and one dead giveaway is they both involve the linear combination of complex exponentials of the same sign.

$$f(t)=\mathcal{F}^{-1}{(\mathcal{F}(\mu))}=\int_{-\infty }^{\infty }\mathcal{F}(\mu)\cdot e^{i2\pi\mu t}d\mu$$

In the image processing world, one can perform Fourier Transform to transform the original image (an aperiodic signal) in a time domain to a frequency domain, where each pixel intensities represent the amplitude of a sinusoid of unique frequency that contributes to the image. 

<br>

If there exist distinct periodic noises across the original image, they should be represented as peaks (bright dots) in the frequency domain, and reconstructing an image after masking away those peaks should be a quick remedy for denoising.

<br>

I’ve skimped over a lot of the details in deriving the formula for the Fourier transform here, and if one’s interested in all the nitty gritty details, I recommend checking out Brad Osgood’s materials which are written extensively on the subject matter.

<br>

We’ve arrived at the final form of the Fourier transform formula by starting off with the Fourier coefficient formula which works only for periodic functions. The question here is, *does the Fourier transform work for periodic functions as well?*

<br>

Sufficient conditions for $$f(t)$$ to meet for its Fourier transform to exist are the Dirichlet conditions, where one of them being $$f(t)$$ to be absolutely integrable:

$$\int_{-\infty}^{\infty}\left | f(t) \right |dt<\infty$$

In other words, the Fourier transform is an integral over an infinite range, and we must consider whether or not the integral converges. 

<br>

This condition would raise an issue since a lot of the functions that we’ll commonly deal with (sinusoids, which happen to be periodic for instance) are not absolutely integrable. 

<br>

I’ll be introducing a unit impulse, and its properties shortly in the next section, which can play a key role in finding the Fourier transform of a periodic signal. Once we’re over that, we’re basically left with an extremely powerful tool that works on just any kind of signal.

<br>

***

<br>

**Sifting property of the Dirac delta distribution (unit impulse)**

<br>

A Dirac delta distribution, also known as the unit impulse, is a singularity function that is zero everywhere except at $$t=0$$. It also has the requirement that its integral over the real axis is $$1$$.

$$\delta(t)=
\begin{cases}
undefined, t=0\\
0, otherwise
\end{cases}$$

$$\int_{-\infty }^{\infty }\delta(t)dt=1$$

It has a property of “sifting” out the value of the integrand at the point of its occurrence when it appears as part of the integral formula along with its integrand.

$$\int_{-\infty }^{\infty }\delta(t)\cdot f(t)dt=f(0)$$

For the generalized unit impulse not located at the origin $$t=0$$:

$$\delta(t-t_0)=
\begin{cases}
undefined, t=t_0\\
0, otherwise
\end{cases}$$

Its sifting propety:

$$\int_{-\infty }^{\infty }\delta(t-t_0)\cdot f(t)dt=f(t_0)$$

<br>

***

<br>

**Fourier transform of $$f(t)=e^{i2\pi\frac{k}{T}t}$$**

<br>

We first try deriving the inverse Fourier transform of the Dirac delta distribution $$\delta(\mu)$$ in the frequency domain (at the origin):

$$\mathcal{F}^{-1}{(\delta(\mu))}=\int_{-\infty }^{\infty }\delta(\mu)\cdot e^{i2\pi\mu t}d\mu$$

Using the sifting property of the impulse:

$$=e^{i2\pi0 t}=1$$

After we’ve established that, it’s easy to spot that the Fourier transform of the constant $$1$$ leads us back to the Dirac delta distribution in the frequency domain.

$$\mathcal{F}(1)=\int_{-\infty }^{\infty }1\cdot e^{-i2\pi\mu t}dt$$

$$=\mathcal{F}(\mathcal{F}^{-1}{(\delta(\mu))})=\delta(\mu)$$

Now to the actual derivation of the Fourier transform of $$f(t)=e^{i2\pi\frac{k}{T}t}$$:

$$\mathcal{F}{(f(t))}=\int_{-\infty }^{\infty }f(t)\cdot e^{-i2\pi\mu t}dt\
=\int_{-\infty }^{\infty }e^{i2\pi\frac{k}{T}t}\cdot e^{-i2\pi \mu t}dt$$

$$=\int_{-\infty }^{\infty }e^{-i2\pi(\mu-\frac{k}{T})t}dt=\int_{-\infty }^{\infty }1\cdot e^{-i2\pi(\mu-\frac{k}{T})t}dt$$

$$=\delta(\mu-\frac{k}{T})$$

<br>

***

<br>

**Fourier transform of a periodic signal $$f(t)=\sum_{k=-\infty}^{\infty}c_k\cdot e^{i2\pi\frac{k}{T}t}$$**

<br>

Linearity is one of the properties of the Fourier transform that’s going to be needed in finding the Fourier transform of the periodic function $$f(t)$$. It is suggesting that the Fourier transform of a sum of functions equates to a sum of the Fourier transform of functions:

$$y(t)=a\cdot x_1(t)+b\cdot x_2(t)$$

$$\mathcal{F}(y(t))=\int_{-\infty }^{\infty }y(t)\cdot e^{-i2\pi\mu t}dt=\int_{-\infty }^{\infty }(a\cdot x_1(t)+b\cdot x_2(t))\cdot e^{-i2\pi\mu t}dt$$

$$=a\int_{-\infty }^{\infty }x_1(t)\cdot e^{-i2\pi\mu t}dt+b\int_{-\infty }^{\infty }x_2(t)\cdot e^{-i2\pi\mu t}dt$$

$$=a\cdot\mathcal{F}(x_1(t))+b\cdot\mathcal{F}(x_2(t))$$

<br>

Now to the actual derivation of $$\mathcal{F}(f(t))$$:

$$\mathcal{F}(f(t))=\mathcal{F}(\sum_{k=-\infty}^{\infty}c_k\cdot e^{i2\pi\frac{k}{T}t})$$

Using the linearity property of the Fourier transform:

$$=\sum_{k=-\infty}^{\infty}c_k\cdot \mathcal{F}(e^{i2\pi\frac{k}{T}t})$$

We derived in the previous section that $$\mathcal{F}(e^{i2\pi\frac{k}{T}t})=\delta(\mu-\frac{k}{T})$$:

$$=\sum_{k=-\infty}^{\infty}c_k\cdot \delta(\mu-\frac{k}{T})$$

<br>

***

<br>

**Bibliography**

<br>

[[**Osgood**]](https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf) Brad Osgood. 2007. Lecture Notes for EE 261. The Fourier Transform and its Applications. https://see.stanford.edu/materials/lsoftaee261/book-fall-07.pdf<br>
[[**Cheever19**]](https://lpsa.swarthmore.edu/Fourier/Xforms/FXformIntro.html) Erik Cheever. 2019. Introduction to the Fourier Transform. https://lpsa.swarthmore.edu/Fourier/Xforms/FXformIntro.html<br>
[[**Zhang21**]](https://towardsdatascience.com/orthogonal-system-and-fourier-series-bec96510db98) Xichu Zhang. 2021. Orthogonal System and Fourier Series. https://towardsdatascience.com/orthogonal-system-and-fourier-series-bec96510db98<br>
[[**Mattuck11**]](https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/618691a1edaa81b0a75303e09b4cb4b5_MIT18_03SCF11_s21_7text.pdf) Arthur Mattuck et el. 2011. Orthogonality Relations. https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/618691a1edaa81b0a75303e09b4cb4b5_MIT18_03SCF11_s21_7text.pdf<br>
[[**Weisstein04**]](https://mathworld.wolfram.com/FourierTransform.html) Eric W. Weisstein. 2004. Fourier Transform. https://mathworld.wolfram.com/FourierTransform.html<br>
[[**Eve14**]](https://class.ece.uw.edu/235dl/EE235/Project/lesson15/lesson15.html) Eve Riskin et el. 2014. The Fourier Transform. https://class.ece.uw.edu/235dl/EE235/Project/lesson15/lesson15.html<br>

<br>

***

<br>

**Updates**

<br>

- (04/25/23) [ (...), '**Bibliography**’]