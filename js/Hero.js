export const Hero =()=> {
    const hero = document.createElement('section')
    hero.classList.add('container','mx-auto','flex','flex-col','items-center','gap-[20px]','pb-[56px]')

    const text = document.createElement('div')
    text.classList.add('text-center')
    const textone = document.createElement('h1')
    textone.textContent= 'Win your dream job'
    textone.classList.add('text-[#6DE754]','font-semibold','lg:text-[88px]')

    const texttwo =document.createElement('h1')
    texttwo.textContent ='with PostJob'
    texttwo.classList.add('text-white','font-semibold','lg:text-[88px]')

    text.appendChild(textone)
    text.appendChild(texttwo)

    const parh = document.createElement('p')
    parh.textContent ='Submit better job app — 10x faster. AI cover letter generator, resume keyword checker, outreach message writer, and more. Powered by GPT'
    parh.classList.add('max-w-[410px]','mx-auto','text-center','text-[#909090]','text-base','font-medium')
    const inputDiv = document.createElement('div')
    inputDiv.classList.add('rounded-xl','border','border-[#909090]','bg-[#161815]','py-2','px-4','lg:w-[45%]','md:w-[70%]','w-full','flex','justify-between','max-h-[68px]','overflow-hidden')


    const input =document.createElement('input')
    input.classList.add('bg-transparent','border-none','outline-none')
    input.placeholder ='Your Email'

    const inputBtn = document.createElement('button')
    inputBtn.classList.add('bg-[#6DE754]','rounded-xl','py-3','px-8','text-[#1F392C]','text-base','font-semibold','whitespace-nowrap')
    inputBtn.textContent = 'Start For Free'

    inputDiv.appendChild(input)
    inputDiv.appendChild(inputBtn)


    hero.appendChild(text)
    hero.appendChild(parh)
    hero.appendChild(inputDiv)

    return hero;
}