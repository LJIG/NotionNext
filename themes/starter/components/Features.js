import { siteConfig } from '@/lib/config'
import { SVGDesign } from './svg/SVGDesign'
import { SVGEssential } from './svg/SVGEssential'
import { SVGGifts } from './svg/SVGGifts'
import { SVGTemplate } from './svg/SVGTemplate'
import Link from 'next/link'
/**
 * 产品特性相关，将显示在首页中
 * @returns
 */
export const Features = () => {
  return (
    <>
      {/* <!-- ====== Features Section Start --> */}
      <section className='pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]'>
        <div className='container'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]'>
                <span className='mb-2 block text-lg font-semibold text-primary'>
                  {siteConfig('STARTER_FEATURE_TITLE')}
                </span>
                <h2 className='mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('STARTER_FEATURE_TEXT_1')}
                </h2>
                <p className='text-base text-body-color dark:text-dark-6'>
                  {siteConfig('STARTER_FEATURE_TEXT_2')}
                </p>
              </div>
            </div>
          </div>
          <div className='-mx-4 flex flex-wrap justify-center'>
            {[1, 2, 3, 4].map(item => {
              const title = siteConfig(`STARTER_FEATURE_${item}_TITLE_1`, '')
              const text = siteConfig(`STARTER_FEATURE_${item}_TEXT_1`, '')
              const buttonText = siteConfig(`STARTER_FEATURE_${item}_BUTTON_TEXT`, '')
              const buttonUrl = siteConfig(`STARTER_FEATURE_${item}_BUTTON_URL`, '')

              if (!title && !text && !buttonText && !buttonUrl) return ''
              return (
                <div key={item} className='w-full px-4 md:w-1/2 lg:w-1/4'>
                  <div className='wow fadeInUp group mb-12 text-center' data-wow-delay='.1s'>
                    <div className='relative mx-auto z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary'>
                      <span className='absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
                      <SVGGifts />
                    </div>
                    <h4 className='mb-3 text-xl font-bold text-dark dark:text-white'>
                      {title}
                    </h4>
                    <p className='mb-8 text-body-color dark:text-dark-6 lg:mb-9'>
                      {text}
                    </p>
                    <Link
                      href={buttonUrl}
                      className='text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary'>
                      {buttonText}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Features Section End --> */}
    </>
  )
}
