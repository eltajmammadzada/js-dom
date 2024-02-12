export const HeaderNav = () => {
    const header = document.createElement('header');
    header.classList.add('container',
    'mx-auto',
    'flex',
    'justify-between',
    'h-20',
    'items-center',
    )

    const left = document.createElement('div')
    left.classList.add('flex')
    left.classList.add('gap-10')
    const logoLink = document.createElement('a');
    logoLink.setAttribute('href', '#');
    logoLink.textContent = 'POST job';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('flex','gap-6')

    const menu1 = document.createElement('a')
    menu1.setAttribute('href', '#')
    menu1.textContent= 'AI Cover Letter Generator'
    menu1.classList.add('text-[#909090]','text-base','font-medium','leading-5')

    const menu2 = document.createElement('a')
    menu2.setAttribute('href', '#')
    menu2.textContent= 'Resume Template'
    menu2.classList.add('text-[#909090]','text-base','font-medium','leading-5')

    const menu3 = document.createElement('a')
    menu3.setAttribute('href', '#')
    menu3.textContent= 'Pricing'
    menu3.classList.add('text-[#909090]','text-base','font-medium','leading-5')

    menuDiv.appendChild(menu1)
    menuDiv.appendChild(menu2)
    menuDiv.appendChild(menu3)



    left.appendChild(logoLink)
    left.appendChild(menuDiv)

    const right = document.createElement('div')
    right.classList.add('flex','gap-4')
    const SignIn = document.createElement('button')
    SignIn.textContent ='Sign In'
    SignIn.classList.add('border', 'border-[#6DE754]','rounded-xl','py-3','px-8','text-base','font-semibold')


    const start =document.createElement('button')
    start.textContent ='Get Started'
    start.classList.add('py-3','px-8','bg-[#6DE754]','rounded-xl','text-base','font-semibold','text-[#000]')

    right.appendChild(SignIn)
    right.appendChild(start)


    header.appendChild(left);
    header.appendChild(right);
    
    return header;
};
  