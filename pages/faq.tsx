function faq() {

    const faqInfo = [
        {
            id: 1,
            name: 'What is online learning like?',
            des: 'For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you’re being transparent and giving them straightforward answers. '
        },
        {
            id: 2,
            name: 'Can I learn at my own pace?',
            des: 'This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are. '
        },
        {
            id: 3,
            name: 'Are you accredited or licensed by educational organizations?',
            des: 'There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant. Make sure that you answer this question by telling them if you do hold any licenses or accreditation, as well as by explaining whether or not those are needed, and why. It gives them the confidence that you have the right experience and boosts your credibility because you’re offering additional information for the sake of education alone. '
        },
        {
            id: 4,
            name: 'Does online learning really work?',
            des: 'There’s always a skeptic, and when it comes to online learning, there are often several of them. Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into. Then, you can invite them to contact you to discuss whether it would be right for them.'
        },
        {
            id: 5,
            name: 'What types of assignments do you give?',
            des: 'Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. As long as you explain to people how the courses are taught and what they can expect in terms of coursework, you’ll be helping them make a better decision about their educational needs.'
        },
        {
            id: 6,
            name: 'What are the requirements to take the courses or sign up with your website?',
            des: 'People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those. If payment or deposits are required, explain that, as well. Make sure that people know exactly what they need to do to take online courses from you, no matter what those courses might be.'
        },
        {
            id: 7,
            name: 'What are the technology requirements?',
            des: 'In the same vein, people need to know whether their computers are up to snuff. You’ll want to explain all the software that you use and what kind of technology people need to take your online courses. If there are certain programs or applications used, put those here. If you have the option to provide technology or direct people to the appropriate purchase, you should do that here, as well. Reassure people that you can help them with the requirements and that they can contact you to discuss whether their system meets the demands of your online courses.'
        },
        {
            id: 8,
            name: 'How long does each course take?',
            des: 'Some online courses are just a few hours long, while others last a few months. Depending on the type of online learning that you offer, your courses may have their own variable lengths. Explain to people the types of courses that you have available and what the time frame is for each one. If you offer self-paced learning, this is another place to reiterate that and reassure people that you can help them learn on their own time.'
        },
        {
            id: 9,
            name: 'Why should I use online learning?',
            des: 'Provide testimonials, perks, and other insight to help people decide that your online courses are right for their needs. Online learning benefits just about everyone. You can even go the extra mile and list some stats about the success rates and benefits of online courses to reaffirm your stance.'
        },
        {
            id: 10,
            name: 'How much do courses cost?',
            des: 'Even when it comes to education and training, people want to be careful with their money. Some people are on a tight budget. Others just want to be mindful of what they spend. Either way, everyone is going to want to know how much online courses are going to cost. If you have a set list of prices, provide those here. You can also advise whether there are payment plans or financial assistance, or if you work with any type of student loan funding.'
        },
    ]

    return (
        <div className="w-10/12 md:8/12 lg:w-6/12 mx-auto space-y-3 my-20">
            {
                faqInfo.map((info): any =>
                    <div key={info.id} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            {info.name}
                        </div>
                        <div className="collapse-content">
                            <p>
                                {info.des}
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default faq;