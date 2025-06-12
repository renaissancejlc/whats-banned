// Learn.jsx — About the Blockade (Swiss/Brutalist Style)
import React from "react";

const Learn = () => (
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
        {/*
          Add handleSubmit just above form
        */}
        {(() => {
          const handleSubmit = (e) => {
            e.preventDefault();
            alert("Your letter has been submitted. Thank you for taking action.");
          };
          // Return the form JSX
          return (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" className="w-full border-b border-black px-4 py-2 bg-transparent" />
              <input type="email" placeholder="Your Email" className="w-full border-b border-black px-4 py-2 bg-transparent" />
              <textarea
                placeholder="Write your letter here..."
                rows="6"
                defaultValue={`Dear Representative,

I am writing to express my urgent concern regarding the ongoing blockade of Gaza. The humanitarian crisis it has caused is unconscionable. I urge you to support measures that end the blockade, allow unrestricted humanitarian aid, and uphold international law.

Sincerely,
[Your Name]`}
                className="w-full border-b border-black px-4 py-2 bg-transparent"
              />
              <button className="border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition uppercase font-extrabold tracking-wide">
                Submit Letter
              </button>
            </form>
          );
        })()}
        <div className="absolute top-0 right-0 text-[20vw] text-neutral-200 font-black z-0 opacity-10 pointer-events-none">
          ACTION
        </div>
      </div>
      </section>

    {/* Footer */}
    <footer className="px-10 py-10 bg-black text-white text-xs uppercase tracking-wide">
      Built by Ren Carr · <a href="https://renaissancecarr.com" className="underline">renaissancecarr.com</a>
    </footer>
  </main>
);

export default Learn;