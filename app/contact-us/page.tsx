import Hero from "@/components/hero-page";

export default function ContactUsPage() {
  return (
    <>
      <Hero title="Contact Us" />
      <section className="py-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <div className="space-y-5 mb-10">
            <h2 className="text-5xl font-semibold text-[#59b400] text-center">
              Contact Us
            </h2>
            <p className="text-center text-[#989898] max-w-[600px] mx-auto">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
          </div>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#59b400]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
