// Learn.jsx — About the Blockade (Swiss/Brutalist Style)
import React from "react";
import emailjs from 'emailjs-com';

const Learn = () => {
  const [userName, setUserName] = React.useState("");
  // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with real EmailJS credentials
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    emailjs.sendForm(
      'service_0wkp8pp',
      'template_uexfvdl',
      e.target,
      'uwfBs1ez1di7dV869'
    )
    .then(() => {
      const statusBox = document.createElement("div");
      statusBox.innerText = "✓ Letter sent. Stay loud.";
      statusBox.className =
        "fixed top-6 left-6 bg-black text-white text-xs font-mono px-4 py-2 tracking-widest z-50 border-2 border-white shadow-md";
      document.body.appendChild(statusBox);
      setTimeout(() => statusBox.remove(), 5000);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      const errorBox = document.createElement("div");
      errorBox.innerText = "⚠️ Failed to send. Try again.";
      errorBox.className =
        "fixed top-6 left-6 bg-red-600 text-white text-xs font-mono px-4 py-2 tracking-widest z-50 border-2 border-white shadow-md";
      document.body.appendChild(errorBox);
      setTimeout(() => errorBox.remove(), 5000);
    });
  };

  return (
    <main className="font-primary bg-white text-black">
      {/* Hero Section */}
      <section className="px-10 py-32 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
        <h1 className="text-[10vw] leading-none font-extrabold uppercase">
          Break<br />The Blockade
        </h1>
        <p className="text-lg md:text-xl max-w-prose">
          Protest through play. What’s denied? What’s resisted? This is more than a game.
        </p>
      </section>

      {/* Timeline */}
      <section className="px-10 py-24 bg-neutral-100">
        <h2 className="text-5xl font-bold uppercase mb-24 border-b-4 border-black inline-block">
          Timeline
        </h2>

        <div className="space-y-32">
          {/* 2007 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2007
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Blockade Begins</h3>
              <p className="text-sm text-neutral-700">
                Israel and Egypt impose a land, air, and sea blockade on Gaza after Hamas takes control, severely restricting movement and goods.
              </p>
            </div>
          </div>

          {/* 2008–2009 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2009
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Operation Cast Lead</h3>
              <p className="text-sm text-neutral-700">
                Israeli military offensive causes over 1,000 Palestinian deaths. Blockade tightens during and after the conflict.
              </p>
            </div>
          </div>

          {/* 2010 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2010
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Mavi Marmara Raid</h3>
              <p className="text-sm text-neutral-700">
                Israeli commandos kill 9 activists aboard a humanitarian flotilla in international waters. Global condemnation follows.
              </p>
            </div>
          </div>

          {/* 2012 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2012
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Aid Restrictions Peak</h3>
              <p className="text-sm text-neutral-700">
                UN reports that only a fraction of needed building materials and humanitarian aid are allowed into Gaza under blockade policy.
              </p>
            </div>
          </div>

          {/* 2018 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2018
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Great March of Return</h3>
              <p className="text-sm text-neutral-700">
                Weekly protests at the fence met with lethal force. Over 200 killed, thousands injured. Blockade used to justify siege tactics.
              </p>
            </div>
          </div>

          {/* 2021 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2021
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Ceasefire After Airstrikes</h3>
              <p className="text-sm text-neutral-700">
                After 11 days of bombardment, Gaza infrastructure is devastated. Restrictions remain, worsening humanitarian conditions.
              </p>
            </div>
          </div>

          {/* 2024 */}
          <div className="relative">
            <div className="absolute -top-6 -left-2 text-[20vw] font-black text-red-600 opacity-10 z-0 leading-none pointer-events-none">
              2024
            </div>
            <div className="relative z-10 pl-4 border-l-2 border-red-600 max-w-prose">
              <h3 className="text-xl font-bold uppercase mb-2">Blockade Intensifies</h3>
              <p className="text-sm text-neutral-700">
                Access to food, electricity, medicine, and water critically reduced. International appeals for relief grow urgent.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Divider */}
      <div className="border-t border-black my-20" />

      {/* Resistance */}
      <section className="px-10 py-24 bg-white">
        <h2 className="text-5xl font-bold uppercase mb-16 border-b-4 border-black inline-block">
          Resistance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg">
          <div>
            <div className="text-sm font-bold uppercase text-red-600 mb-1">ACTION // 01</div>
            <h3 className="uppercase font-bold text-xl mb-2">Freedom Flotillas</h3>
            <p>Civilian fleets intercepted or attacked en route to Gaza.</p>
          </div>
          <div className="mt-10">
            <div className="text-sm font-bold uppercase text-red-600 mb-1">ACTION // 02</div>
            <h3 className="uppercase font-bold text-xl mb-2">Land Convoys</h3>
            <p>Stopped or detained at borders, blocked from delivering aid.</p>
          </div>
          <div>
            <div className="text-sm font-bold uppercase text-red-600 mb-1">ACTION // 03</div>
            <h3 className="uppercase font-bold text-xl mb-2">Symbolic Actions</h3>
            <p>Protests, digital storytelling, balloon launches under siege.</p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black my-20" />

      {/* Resources */}
      <section className="px-10 py-24 bg-neutral-100">
        <h2 className="text-5xl font-bold uppercase mb-16 border-b-4 border-black inline-block">
          Learn More
        </h2>
        <div className="space-y-8 text-sm">
          <div>
            <h4 className="font-bold text-xl uppercase">B'Tselem</h4>
            <a href="https://www.btselem.org/topic/gaza_strip" target="_blank" className="underline hover:text-red-600">
              Gaza Strip Documentation
            </a>
          </div>
          <div>
            <h4 className="font-bold text-xl uppercase">UNRWA</h4>
            <a href="https://www.unrwa.org/gaza-emergency" target="_blank" className="underline hover:text-red-600">
              Gaza Emergency Reports
            </a>
          </div>
          <div>
            <h4 className="font-bold text-xl uppercase">Freedom Flotilla</h4>
            <a href="https://freedomflotilla.org" target="_blank" className="underline hover:text-red-600">
              Civilian Resistance by Sea
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-black my-20" />

      {/* Action Prompt */}
      <section className="px-10 py-32 bg-white relative flex flex-col lg:flex-row justify-between items-start gap-20">
        <div className="text-red-600 font-extrabold text-6xl lg:text-[7vw] leading-tight whitespace-pre-line">
          WRITE.{'\n'}PRESSURE.{'\n'}DISRUPT.
        </div>
        <div className="relative z-10 w-full max-w-xl">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full border-b border-black px-4 py-2 bg-transparent"
            />
            <input type="email" name="user_email" placeholder="Your Email" className="w-full border-b border-black px-4 py-2 bg-transparent" />
            <input type="hidden" name="to_emails" value="outreach@un.org, pressoffice@unrwa.org, ops-info@unops.org, ochaopt@un.org, renysportfolio@gmail.com" />
            <textarea
              name="message"
              placeholder="Write your letter here..."
              rows="6"
              value={`Dear Representative,

I am writing to express grave concern regarding the ongoing Israeli blockade of Gaza, now in its 18th year. This blockade constitutes not only a humanitarian disaster, but a flagrant violation of international law and basic human decency.

Under Article 33 of the Fourth Geneva Convention, collective punishment is explicitly prohibited, yet over two million civilians in Gaza, half of them children, are being denied freedom of movement, access to clean water, electricity, medical care, and food. The blockade has turned Gaza into what many international observers and UN officials have described as an “open-air prison.”

International law demands that even during armed conflict, essential humanitarian aid must be allowed to reach civilian populations. The United Nations, Amnesty International, Human Rights Watch, and the International Committee of the Red Cross have all condemned the blockade. The continued enforcement of it not only violates the Geneva Conventions but also Article 1 of the UN Charter, which upholds the right of peoples to self-determination and protection from domination by force.

We do not permit any other country this level of impunity. No democratic nation should be allowed to impose such prolonged suffering without accountability. This is not a neutral policy, it is a form of collective punishment that targets an entire population for the actions of a few, in blatant defiance of the international rules-based order.

I urge you to support immediate and meaningful action to end the blockade, ensure unrestricted humanitarian access, and hold Israel accountable for these violations. Continued inaction is complicity.

Sincerely,
${userName || "[Your Name]"}`}
              className="w-full border-b border-black px-4 py-2 bg-transparent"
            />
            <button className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition uppercase font-extrabold tracking-wide">
              Submit Letter
            </button>
          </form>
          <div className="absolute top-0 right-0 text-[20vw] text-neutral-200 font-black z-0 opacity-10 pointer-events-none">
            ACTION
          </div>
        </div>
      </section>

      {/* Who You're Pressuring Section */}
      <section className="mt-32 px-10 py-24 bg-neutral-200 relative z-10">
        <div className="text-red-600 font-extrabold text-5xl md:text-[6vw] leading-tight uppercase mb-16 relative z-10">
          Who You’re Pressuring
        </div>
        <div className="grid md:grid-cols-2 gap-12 text-sm md:text-base font-semibold leading-relaxed relative z-10">
          <div>
            <h3 className="uppercase text-xl mb-2 font-black text-black">Direct Email Recipients</h3>
            <ul className="space-y-2 text-neutral-800">
              <li><strong>Maher Nasser</strong> – outreach@un.org</li>
              <li><strong>Philippe Lazzarini</strong> – pressoffice@unrwa.org</li>
              <li><strong>Jorge Moreira da Silva</strong> – ops-info@unops.org</li>
              <li><strong>OCHA Gaza Office</strong> – ochaopt@un.org</li>
            </ul>
            <p className="mt-4 text-xs text-neutral-500 italic">*Your message may be blind-copied to campaign organizers to ensure delivery.</p>
          </div>
          <div>
            <h3 className="uppercase text-xl mb-2 font-black text-black">Contact These U.S. Senators</h3>
            <ul className="space-y-2 text-neutral-800 underline">
              <li><a href="https://www.welch.senate.gov/contact" target="_blank">Sen. Peter Welch (D‑VT)</a></li>
              <li><a href="https://www.warner.senate.gov/public/index.cfm/e-mail-senator-warner" target="_blank">Sen. Mark Warner (D‑VA)</a></li>
              <li><a href="https://www.kaine.senate.gov/contact" target="_blank">Sen. Tim Kaine (D‑VA)</a></li>
              <li><a href="https://www.markey.senate.gov/contact" target="_blank">Sen. Ed Markey (D‑MA)</a></li>
              <li><a href="https://www.murphy.senate.gov/contact" target="_blank">Sen. Chris Murphy (D‑CT)</a></li>
              <li><a href="https://www.heinrich.senate.gov/contact" target="_blank">Sen. Martin Heinrich (D‑NM)</a></li>
              <li><a href="https://www.durbin.senate.gov/contact" target="_blank">Sen. Dick Durbin (D‑IL)</a></li>
              <li><a href="https://www.coons.senate.gov/contact" target="_blank">Sen. Chris Coons (D‑DE)</a></li>
              <li><a href="https://www.booker.senate.gov/contact" target="_blank">Sen. Cory Booker (D‑NJ)</a></li>
            </ul>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full text-[25vw] font-black text-black opacity-5 pointer-events-none z-0 leading-none pl-4">
          PRESSURE
        </div>
      </section>

      {/* Footer */}
      <footer className="px-10 py-10 bg-black text-white text-xs uppercase tracking-wide">
       · Built in soldarity · 
      </footer>
    </main>
  );
};

export default Learn;
