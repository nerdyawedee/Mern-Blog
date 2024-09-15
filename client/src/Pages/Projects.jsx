import CallToAction from '../Component/CallToAction';

export default function Projects() {
  return (
    <div className='dark:text-white min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold dark:text-white'>Pojects</h1>
      <p className='text-md text-gray-500 dark:text-white'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <CallToAction />
    </div>
  )
}