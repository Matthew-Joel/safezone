import ContactUsHero from '../../ui/organisms/contactpage/hero'
import JoinWaitList from '../../ui/organisms/contactpage/joinwaitlist'
import ContactDetails from '../../ui/organisms/contactpage/contactdetails'

const ContactUsTemplate = () => {
  return (
    <div className='w-[100vw] relative'>
      <ContactUsHero />
      <ContactDetails />
      <JoinWaitList />
    </div>
  )
}

export default ContactUsTemplate