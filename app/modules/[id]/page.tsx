// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// import lessonsData from "../lessons.json";

// type VisualGuide = {
//   id: string;
//   image: string;
// };

// type MythFact = {
//   myth: string;
//   fact: string;
// };

// type ContentItem = string | MythFact;

// type ContentValue =
//   | string
//   | string[]
//   | MythFact[]
//   | Record<string, unknown>;

// type SafetyCardData = {
//   number: string;
//   title: string;
//   text: string;
//   icon: string;
// };

// type Lesson = {
//   id: number;
//   title: string;
//   image: string;
//   color?: string;
//   visual_Guide?: VisualGuide[];

//   introduction?: ContentValue;
//   causes?: ContentValue;
//   types?: ContentValue;
//   warning_signs?: ContentValue;
//   prevention?: ContentValue;
//   preparedness?: ContentValue;

//   what_to_do_before?: ContentValue;
//   what_to_do_during?: ContentValue;
//   what_to_do_after?: ContentValue;

//   evacuation?: ContentValue;
//   common_mistakes?: ContentValue;
//   myths_and_facts?: ContentValue;
//   emergency_response?: ContentValue;

//   safety_cards?: SafetyCardData[];

//   video?: string;
//   thumbnail?: string;
// };

// type ArticleSectionProps = {
//   id: string;
//   icon: string;
//   title: string;
//   content?: ContentValue;
// };

// type ContentTextProps = {
//   content?: ContentValue;
// };

// type SectionTitleProps = {
//   icon: string;
//   title: string;
// };

// type SafetyCardProps = {
//   number: string;
//   title: string;
//   text: string;
//   icon: string;
// };



// const ModuleDetails = () => {
//   const { id } = useParams();
//   const lessons = lessonsData as Record<string, Lesson>;
  

//   const [activeSection, setActiveSection] = useState("introduction");

//   if (!module) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold">
//           Module not found
//         </h1>
//       </div>
//     );
//   }

//   const sections = [
//     {
//       name: "Introduction",
//       id: "introduction",
//     },
//     {
//       name: "Causes",
//       id: "causes",
//     },
//     {
//       name: "Types",
//       id: "types",
//     },
//     {
//       name: "Warning Signs",
//       id: "warning_signs",
//     },
//     {
//       name: "Prevention",
//       id: "prevention",
//     },
//     {
//       name: "Preparedness",
//       id: "preparedness",
//     },
//     {
//       name: "What To Do Before",
//       id: "what_to_do_before",
//     },
//     {
//       name: "What To Do During",
//       id: "what_to_do_during",
//     },
//     {
//       name: "What To Do After",
//       id: "what_to_do_after",
//     },
//     {
//       name: "Evacuation",
//       id: "evacuation",
//     },
//     {
//       name: "Common Mistakes",
//       id: "common_mistakes",
//     },
//     {
//       name: "Myths & Facts",
//       id: "myths_and_facts",
//     },
//     {
//       name: "Emergency Response",
//       id: "emergency_response",
//     },
//   ];

//   //sidebar
//  const handleSectionClick = (sectionId: string) => {
//     const element = document.getElementById(sectionId);

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });

//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F5FBFC] px-3 sm:px-5 lg:px-6 py-4 sm:py-6">

//       <div className="max-w-7xl mx-auto">
//         <Link
//           href="/modules"
//           className=" inline-block mb-5 text-[#007C8A] font-semibold hover:underline " >← Back to Modules</Link>


//         <div className="flex flex-col lg:flex-row gap-6">

//           <aside className="w-full lg:w-64 lg:shrink-0 bg-white rounded-2xl p-4 sm:p-5 shadow-sm lg:sticky lg:top-5 lg:h-fit">

//             <div className=" flex flex-row lg:flex-col items-center gap-3 lg:gap-0 mb-5" >
//               <div className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full overflow-hidden flex items-center justify-center"  style={{ backgroundColor: module.color }}>
//                 <img src={module.image} alt={module.title} className="w-full h-full object-cover"/>
//               </div> 

//               <h2 className=" text-lg font-bold text-[#006F7C] lg:mt-3 lg:text-center" >
//                 {module.title}
//               </h2>

//             </div>

//             <div className="  flex  lg:block  gap-2 overflow-x-auto lg:overflow-visible pb-1" >

//               {sections.map((section) => (

//                 <button
//                   key={section.id}
//                   onClick={() => handleSectionClick(section.id)}
//                   className={`shrink-0 lg:w-full text-left px-4 py-3 rounded-lg text-sm  font-medium transition  whitespace-nowrap lg:whitespace-normal

//                     ${activeSection === section.id
//                       ? "bg-[#DDF5F8] text-[#007C8A] lg:border-l-4 lg:border-[#008596]"
//                       : "text-gray-700 hover:bg-gray-100"}`}>
//                   {section.name}
//                 </button>

//               ))}

//             </div>

//           </aside>



//           <main className="  flex-1  min-w-0  bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 " >

//             <div className="mb-7">

//               <span className="inline-block bg-[#DDF5F8] text-[#007C8A] text-xs font-bold px-4 py-2 rounded-full">
//                 DISASTER READINESS MODULE
//               </span>


//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006F7C] mt-4">
//                 {module.title}
//               </h1>


//               <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
//                 Learn how to stay safe during an emergency and protect
//                 yourself and others.
//               </p>

//             </div>

//             <div className="mb-8">

//               <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black ">

//                 <video
//                   className="w-full h-full object-cover"
//                   controls
//                   preload="metadata"
//                   poster={module.thumbnail}
//                 >

//                   <source
//                     src={module.video}
//                     type="video/mp4"
//                   />

//                   Your browser does not support the video tag.

//                 </video>

//               </div>

//               <p className="text-sm text-gray-500 mt-2">
//                 🎥 Watch this video to learn the basics.
//               </p>

//             </div>


//             <ArticleSection
//               id="introduction"
//               icon="📖"
//               title="Introduction"
//               content={module.introduction}
//             />
            
//             <ArticleSection
//               id="causes"
//               icon="⚙️"
//               title="Causes"
//               content={module.causes}
//             />

//             <ArticleSection
//               id="types"
//               icon="📋"
//               title="Types"
//               content={module.types}
//             />

//             <ArticleSection
//               id="warning_signs"
//               icon="⚠️"
//               title="Warning Signs"
//               content={module.warning_signs}
//             />


//             <ArticleSection
//               id="prevention"
//               icon="🛡️"
//               title="Prevention"
//               content={module.prevention}
//             />

//             <ArticleSection
//               id="preparedness"
//               icon="🎒"
//               title="Preparedness"
//               content={module.preparedness}
//             />

//             <ArticleSection
//               id="what_to_do_before"
//               icon="⏳"
//               title="What To Do Before"
//               content={module.what_to_do_before}
//             />

//   {module.visual_Guide && (
//   <section
//     id="visual_guide"
//     className="py-7 border-b border-gray-200 scroll-mt-6"
//   >
//     <SectionTitle
//       icon="👀"
//       title="Visual Guide"
//     />

//     <p className="mb-5 text-sm text-gray-600 sm:text-base">
//       Learn the important safety steps through these visuals.
//     </p>

//     <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//       {module.visual_Guide.map((guide: VisualGuide) => (
//         <div
//           key={guide.id}
//           className="overflow-hidden rounded-2xl border-2 border-[#B9E8EE] bg-[#F1FBFC] shadow-sm"
//         >
//           <img
//             src={guide.image}
//             alt={`Visual guide step ${guide.id}`}
//             className="block h-56 w-full object-contain"
//           />
//         </div>
//       ))}
//     </div>
//   </section>
// )}
//             <section
//               id="what_to_do_during"
//               className="
//                 py-7
//                 border-b
//                 border-gray-200
//                 scroll-mt-6
//               "
//             >

//               <SectionTitle
//                 icon="🛡️"
//                 title="What To Do During"
//               />

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {module.safety_cards.map((card) => (
//                   <SafetyCard
//                     key={card.number}
//                     number={card.number}
//                     title={card.title}
//                     text={card.text}
//                     icon={card.icon}
//                   />
//                 ))}
//               </div>
//               {module.what_to_do_during && (
//                 <ContentText content={module.what_to_do_during} />
//               )}
              


//             </section>

//             <ArticleSection id="what_to_do_after" icon="✅" title="What To Do After" content={module.what_to_do_after}
//             />

//             <ArticleSection id="evacuation" icon="🚪" title="Evacuation" content={module.evacuation} />

//             <ArticleSection id="common_mistakes" icon="❌" title="Common Mistakes" content={module.common_mistakes} />

//             <ArticleSection id="myths_and_facts" icon="💡" title="Myths & Facts" content={module.myths_and_facts} />


//             <ArticleSection id="emergency_response" icon="🚨" title="Emergency Response" content={module.emergency_response}
//             />

//             <div className=" bg-[#E8F9FB] border border-[#A7E4EC] rounded-xl px-5 py-4 text-sm text-[#006F7C] font-medium" >
//               🛡️{" "}
//               <span className="font-bold">
//                 Remember:
//               </span>{" "}
//               Stay calm and don't rush outside. Follow safety instructions.
//             </div>
//               <Link href={`/quiz/${id}`} className="block border border-black w-40 mt-5 text-black text-center py-2.5 rounded-3xl hover:bg-pink-800 transition" >Start Quiz</Link>

//           </main>

//         </div>

//       </div>

//     </div>
//   );
// };



// const ArticleSection = ({
//   id,
//   icon,
//   title,
//   content,
// }: ArticleSectionProps) => {

//   return (
//     <section
//       id={id}
//       className=" py-7 border-b border-gray-200 scroll-mt-6"
//     >

//       <SectionTitle
//         icon={icon}
//         title={title}
//       />

//       <ContentText content={content} />

//     </section>
//   );
// };

// const ContentText = ({ content }: ContentTextProps) => {
//   if (!content) return <p>Content coming soon...</p>;

//   if (Array.isArray(content)) {
//     return (
//       <ul>
//         {content.map((item: ContentItem, index: number) => (
//           <li key={index}>
//             {typeof item === "object" &&
//             item !== null &&
//             "myth" in item &&
//             "fact" in item ? (
//               <div>
//                 <div>
//                   <strong>Myth:</strong>
//                   <p>{item.myth}</p>
//                 </div>

//                 <div>
//                   <strong>Fact:</strong>
//                   <p>{item.fact}</p>
//                 </div>
//               </div>
//             ) : (
//               String(item)
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   }

//   if (typeof content === "object" && content !== null) {
//     return (
//       <div>
//         {Object.entries(content).map(([key, value]) => (
//           <div key={key}>
//             <h3>{key}</h3>

//             <p>
//               {typeof value === "object" && value !== null
//                 ? JSON.stringify(value)
//                 : String(value)}
//             </p>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   return <p>{content}</p>;
// };



// const SectionTitle = ({
//   icon,
//   title,
// }: SectionTitleProps) => {

//   return (
//     <div className="flex items-center gap-3 mb-4">

//       <div className="w-10 h-10 shrink-0 rounded-full bg-[#DDF5F8] flex items-center justify-center">
//         {icon}
//       </div>

//       <h2 className=" text-xl sm:text-2xl font-bold text-[#006F7C]">{title}</h2>

//     </div>
//   );
// };


// const SafetyCard = ({
//   number,
//   title,
//   text,
//   icon,
// }: SafetyCardProps) => {

//   return (
//     <div
//       className="bg-[#F1FBFC] border border-[#B9E8EE] rounded-xl p-4">

//       <div className="flex items-center gap-3">

//         <div className=" w-14 h-14 lg:w-16 lg:h-16  shrink-0  rounded-full bg-[#C7F2F7] flex items-center justify-center  text-2xl " >
//           {icon}
//         </div>

//         <div>

//           <p className="font-bold text-[#006F7C]">
//             {number}. {title}
//           </p>

//           <p className="text-sm text-gray-600 mt-1 leading-5">
//             {text} 
//           </p>



         

//         </div>

//       </div>

//     </div>
//   );
// };


// export default ModuleDetails;


"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import lessonsData from "../lessons.json";

type VisualGuide = {
  id: string;
  image: string;
};

type MythFact = {
  myth: string;
  fact: string;
};

type ContentItem = string | MythFact;

type ContentValue =
  | string
  | string[]
  | MythFact[]
  | Record<string, unknown>;

type SafetyCardData = {
  number: string;
  title: string;
  text: string;
  icon: string;
};

type Lesson = {
  id: number;
  title: string;
  image: string;
  color?: string;
  visual_Guide?: VisualGuide[];

  introduction?: ContentValue;
  causes?: ContentValue;
  types?: ContentValue;
  warning_signs?: ContentValue;
  prevention?: ContentValue;
  preparedness?: ContentValue;

  what_to_do_before?: ContentValue;
  what_to_do_during?: ContentValue;
  what_to_do_after?: ContentValue;

  evacuation?: ContentValue;
  common_mistakes?: ContentValue;
  myths_and_facts?: ContentValue;
  emergency_response?: ContentValue;

  safety_cards?: SafetyCardData[];

  video?: string;
  thumbnail?: string;
};

type ArticleSectionProps = {
  id: string;
  icon: string;
  title: string;
  content?: ContentValue;
};

type ContentTextProps = {
  content?: ContentValue;
};

type SectionTitleProps = {
  icon: string;
  title: string;
};

type SafetyCardProps = {
  number: string;
  title: string;
  text: string;
  icon: string;
};

const ModuleDetails = () => {
  const { id } = useParams<{ id: string }>();

  const lessons = lessonsData as Record<string, Lesson>;

  const module = lessons[id];

  const [activeSection, setActiveSection] = useState("introduction");

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Module not found
        </h1>
      </div>
    );
  }

  const sections = [
    {
      name: "Introduction",
      id: "introduction",
    },
    {
      name: "Causes",
      id: "causes",
    },
    {
      name: "Types",
      id: "types",
    },
    {
      name: "Warning Signs",
      id: "warning_signs",
    },
    {
      name: "Prevention",
      id: "prevention",
    },
    {
      name: "Preparedness",
      id: "preparedness",
    },
    {
      name: "What To Do Before",
      id: "what_to_do_before",
    },
    {
      name: "What To Do During",
      id: "what_to_do_during",
    },
    {
      name: "What To Do After",
      id: "what_to_do_after",
    },
    {
      name: "Evacuation",
      id: "evacuation",
    },
    {
      name: "Common Mistakes",
      id: "common_mistakes",
    },
    {
      name: "Myths & Facts",
      id: "myths_and_facts",
    },
    {
      name: "Emergency Response",
      id: "emergency_response",
    },
  ];

  //sidebar
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5FBFC] px-3 sm:px-5 lg:px-6 py-4 sm:py-6">

      <div className="max-w-7xl mx-auto">

        <Link
          href="/modules"
          className=" inline-block mb-5 text-[#007C8A] font-semibold hover:underline "
        >
          ← Back to Modules
        </Link>

        <div className="flex flex-col lg:flex-row gap-6">

          <aside className="w-full lg:w-64 lg:shrink-0 bg-white rounded-2xl p-4 sm:p-5 shadow-sm lg:sticky lg:top-5 lg:h-fit">

            <div className=" flex flex-row lg:flex-col items-center gap-3 lg:gap-0 mb-5">

              <div
                className="w-16 h-16 lg:w-20 lg:h-20 shrink-0 rounded-full overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: module.color }}
              >
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className=" text-lg font-bold text-[#006F7C] lg:mt-3 lg:text-center">
                {module.title}
              </h2>

            </div>

            <div className=" flex lg:block gap-2 overflow-x-auto lg:overflow-visible pb-1">

              {sections.map((section) => (

                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`shrink-0 lg:w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition whitespace-nowrap lg:whitespace-normal

                    ${activeSection === section.id
                      ? "bg-[#DDF5F8] text-[#007C8A] lg:border-l-4 lg:border-[#008596]"
                      : "text-gray-700 hover:bg-gray-100"}`}
                >
                  {section.name}
                </button>

              ))}

            </div>

          </aside>

          <main className="flex-1 min-w-0 bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">

            <div className="mb-7">

              <span className="inline-block bg-[#DDF5F8] text-[#007C8A] text-xs font-bold px-4 py-2 rounded-full">
                DISASTER READINESS MODULE
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#006F7C] mt-4">
                {module.title}
              </h1>

              <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
                Learn how to stay safe during an emergency and protect
                yourself and others.
              </p>

            </div>

            <div className="mb-8">

              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black">

                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster={module.thumbnail}
                >

                  <source
                    src={module.video}
                    type="video/mp4"
                  />

                  Your browser does not support the video tag.

                </video>

              </div>

              <p className="text-sm text-gray-500 mt-2">
                🎥 Watch this video to learn the basics.
              </p>

            </div>

            <ArticleSection
              id="introduction"
              icon="📖"
              title="Introduction"
              content={module.introduction}
            />

            <ArticleSection
              id="causes"
              icon="⚙️"
              title="Causes"
              content={module.causes}
            />

            <ArticleSection
              id="types"
              icon="📋"
              title="Types"
              content={module.types}
            />

            <ArticleSection
              id="warning_signs"
              icon="⚠️"
              title="Warning Signs"
              content={module.warning_signs}
            />

            <ArticleSection
              id="prevention"
              icon="🛡️"
              title="Prevention"
              content={module.prevention}
            />

            <ArticleSection
              id="preparedness"
              icon="🎒"
              title="Preparedness"
              content={module.preparedness}
            />

            <ArticleSection
              id="what_to_do_before"
              icon="⏳"
              title="What To Do Before"
              content={module.what_to_do_before}
            />

            {module.visual_Guide && (
              <section
                id="visual_guide"
                className="py-7 border-b border-gray-200 scroll-mt-6"
              >

                <SectionTitle
                  icon="👀"
                  title="Visual Guide"
                />

                <p className="mb-5 text-sm text-gray-600 sm:text-base">
                  Learn the important safety steps through these visuals.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                  {module.visual_Guide.map((guide: VisualGuide) => (

                    <div
                      key={guide.id}
                      className="overflow-hidden rounded-2xl border-2 border-[#B9E8EE] bg-[#F1FBFC] shadow-sm"
                    >

                      <img
                        src={guide.image}
                        alt={`Visual guide step ${guide.id}`}
                        className="block h-56 w-full object-contain"
                      />

                    </div>

                  ))}

                </div>

              </section>
            )}

            <section
              id="what_to_do_during"
              className="
                py-7
                border-b
                border-gray-200
                scroll-mt-6
              "
            >

              <SectionTitle
                icon="🛡️"
                title="What To Do During"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {module.safety_cards?.map((card: SafetyCardData) => (

                  <SafetyCard
                    key={card.number}
                    number={card.number}
                    title={card.title}
                    text={card.text}
                    icon={card.icon}
                  />

                ))}

              </div>

              {module.what_to_do_during && (
                <ContentText content={module.what_to_do_during} />
              )}

            </section>

            <ArticleSection
              id="what_to_do_after"
              icon="✅"
              title="What To Do After"
              content={module.what_to_do_after}
            />

            <ArticleSection
              id="evacuation"
              icon="🚪"
              title="Evacuation"
              content={module.evacuation}
            />

            <ArticleSection
              id="common_mistakes"
              icon="❌"
              title="Common Mistakes"
              content={module.common_mistakes}
            />

            <ArticleSection
              id="myths_and_facts"
              icon="💡"
              title="Myths & Facts"
              content={module.myths_and_facts}
            />

            <ArticleSection
              id="emergency_response"
              icon="🚨"
              title="Emergency Response"
              content={module.emergency_response}
            />

            <div className="bg-[#E8F9FB] border border-[#A7E4EC] rounded-xl px-5 py-4 text-sm text-[#006F7C] font-medium">

              🛡️{" "}

              <span className="font-bold">
                Remember:
              </span>{" "}

              Stay calm and don't rush outside. Follow safety instructions.

            </div>

            <Link
              href={`/quiz/${id}`}
              className="block border border-black w-40 mt-5 text-black text-center py-2.5 rounded-3xl hover:bg-pink-800 transition"
            >
              Start Quiz
            </Link>

          </main>

        </div>

      </div>

    </div>
  );
};


/* =========================================================
   ARTICLE SECTION
========================================================= */

const ArticleSection = ({
  id,
  icon,
  title,
  content,
}: ArticleSectionProps) => {

  return (
    <section
      id={id}
      className="py-7 border-b border-gray-200 scroll-mt-6"
    >

      <SectionTitle
        icon={icon}
        title={title}
      />

      <ContentText content={content} />

    </section>
  );
};


/* =========================================================
   CONTENT TEXT
========================================================= */

const ContentText = ({ content }: ContentTextProps) => {

  if (!content) {
    return <p>Content coming soon...</p>;
  }

  if (Array.isArray(content)) {

    return (
      <ul>

        {content.map((item: ContentItem, index: number) => (

          <li key={index}>

            {typeof item === "object" &&
            item !== null &&
            "myth" in item &&
            "fact" in item ? (

              <div>

                <div>
                  <strong>Myth:</strong>
                  <p>{item.myth}</p>
                </div>

                <div>
                  <strong>Fact:</strong>
                  <p>{item.fact}</p>
                </div>

              </div>

            ) : (

              String(item)

            )}

          </li>

        ))}

      </ul>
    );
  }

  if (typeof content === "object" && content !== null) {

    return (
      <div>

        {Object.entries(content).map(([key, value]) => (

          <div key={key}>

            <h3>{key}</h3>

            <p>
              {typeof value === "object" && value !== null
                ? JSON.stringify(value)
                : String(value)}
            </p>

          </div>

        ))}

      </div>
    );
  }

  return <p>{content}</p>;
};


/* =========================================================
   SECTION TITLE
========================================================= */

const SectionTitle = ({
  icon,
  title,
}: SectionTitleProps) => {

  return (
    <div className="flex items-center gap-3 mb-4">

      <div className="w-10 h-10 shrink-0 rounded-full bg-[#DDF5F8] flex items-center justify-center">
        {icon}
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-[#006F7C]">
        {title}
      </h2>

    </div>
  );
};


/* =========================================================
   SAFETY CARD
========================================================= */

const SafetyCard = ({
  number,
  title,
  text,
  icon,
}: SafetyCardProps) => {

  return (
    <div
      className="bg-[#F1FBFC] border border-[#B9E8EE] rounded-xl p-4"
    >

      <div className="flex items-center gap-3">

        <div className="w-14 h-14 lg:w-16 lg:h-16 shrink-0 rounded-full bg-[#C7F2F7] flex items-center justify-center text-2xl">
          {icon}
        </div>

        <div>

          <p className="font-bold text-[#006F7C]">
            {number}. {title}
          </p>

          <p className="text-sm text-gray-600 mt-1 leading-5">
            {text}
          </p>

        </div>

      </div>

    </div>
  );
};


export default ModuleDetails;