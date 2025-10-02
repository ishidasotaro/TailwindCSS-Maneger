// tailwind-data.js
const tailwindData = [
    // --- Spacing (Padding / Margin) ---
    { class: "p-0", property: "padding: 0px;" },
    { class: "p-2", property: "padding: 0.5rem;" },
    { class: "p-4", property: "padding: 1rem;" },
    { class: "px-4", property: "padding-left: 1rem; padding-right: 1rem;" },
    { class: "py-2", property: "padding-top: 0.5rem; padding-bottom: 0.5rem;" },
    { class: "pt-6", property: "padding-top: 1.5rem;" },
    { class: "pb-6", property: "padding-bottom: 1.5rem;" },

    { class: "m-0", property: "margin: 0px;" },
    { class: "m-auto", property: "margin: auto;" },
    { class: "mt-4", property: "margin-top: 1rem;" },
    { class: "mb-8", property: "margin-bottom: 2rem;" },
    { class: "mx-2", property: "margin-left: 0.5rem; margin-right: 0.5rem;" },

    // --- Space / Gap ---
    { class: "gap-2", property: "gap: 0.5rem;" },
    { class: "gap-4", property: "gap: 1rem;" },
    { class: "space-x-2", property: "column-gap: 0.5rem;" },
    { class: "space-y-2", property: "row-gap: 0.5rem;" },

    // --- Display & Position ---
    { class: "block", property: "display: block;" },
    { class: "inline-block", property: "display: inline-block;" },
    { class: "inline", property: "display: inline;" },
    { class: "flex", property: "display: flex;" },
    { class: "inline-flex", property: "display: inline-flex;" },
    { class: "grid", property: "display: grid;" },
    { class: "hidden", property: "display: none;" },

    { class: "relative", property: "position: relative;" },
    { class: "absolute", property: "position: absolute;" },
    { class: "fixed", property: "position: fixed;" },
    { class: "sticky", property: "position: sticky;" },
    { class: "top-0", property: "top: 0px;" },
    { class: "right-0", property: "right: 0px;" },
    { class: "bottom-0", property: "bottom: 0px;" },
    { class: "left-0", property: "left: 0px;" },
    { class: "inset-0", property: "top: 0; right: 0; bottom: 0; left: 0;" },
    { class: "left-1/2", property: "left: 50%;" },
    { class: "top-1/2", property: "top: 50%;" },

    { class: "z-0", property: "z-index: 0;" },
    { class: "z-10", property: "z-index: 10;" },
    { class: "z-50", property: "z-index: 50;" },
    { class: "z-auto", property: "z-index: auto;" },

    // --- Sizing ---
    { class: "w-full", property: "width: 100%;" },
    { class: "w-screen", property: "width: 100vw;" },
    { class: "w-1/2", property: "width: 50%;" },
    { class: "max-w-sm", property: "max-width: 24rem;" },
    { class: "max-w-xl", property: "max-width: 36rem;" },
    { class: "h-10", property: "height: 2.5rem;" },
    { class: "h-screen", property: "height: 100vh;" },
    { class: "min-h-screen", property: "min-height: 100vh;" },

    // --- Overflow & Object Fit ---
    { class: "overflow-hidden", property: "overflow: hidden;" },
    { class: "overflow-auto", property: "overflow: auto;" },
    { class: "overflow-x-scroll", property: "overflow-x: scroll;" },
    {
        class: "truncate",
        property:
            "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",
    },
    { class: "object-cover", property: "object-fit: cover;" },
    { class: "object-contain", property: "object-fit: contain;" },
    { class: "object-center", property: "object-position: center;" },

    // --- Flexbox ---
    { class: "flex-row", property: "flex-direction: row;" },
    { class: "flex-col", property: "flex-direction: column;" },
    { class: "flex-wrap", property: "flex-wrap: wrap;" },
    { class: "items-start", property: "align-items: flex-start;" },
    { class: "items-center", property: "align-items: center;" },
    { class: "items-end", property: "align-items: flex-end;" },
    { class: "justify-start", property: "justify-content: flex-start;" },
    { class: "justify-center", property: "justify-content: center;" },
    { class: "justify-between", property: "justify-content: space-between;" },
    { class: "justify-around", property: "justify-content: space-around;" },
    { class: "content-center", property: "align-content: center;" },
    { class: "gap-6", property: "gap: 1.5rem;" },
    { class: "grow", property: "flex-grow: 1;" },
    { class: "grow-0", property: "flex-grow: 0;" },
    { class: "shrink", property: "flex-shrink: 1;" },
    { class: "shrink-0", property: "flex-shrink: 0;" },
    { class: "basis-1/2", property: "flex-basis: 50%;" },

    // --- Grid ---
    {
        class: "grid-cols-2",
        property: "grid-template-columns: repeat(2, minmax(0, 1fr));",
    },
    {
        class: "grid-cols-3",
        property: "grid-template-columns: repeat(3, minmax(0, 1fr));",
    },
    {
        class: "grid-rows-2",
        property: "grid-template-rows: repeat(2, minmax(0, 1fr));",
    },
    { class: "col-span-2", property: "grid-column: span 2 / span 2;" },
    { class: "row-span-2", property: "grid-row: span 2 / span 2;" },

    // --- Typography ---
    { class: "text-xs", property: "font-size: 0.75rem; line-height: 1rem;" },
    {
        class: "text-sm",
        property: "font-size: 0.875rem; line-height: 1.25rem;",
    },
    { class: "text-base", property: "font-size: 1rem; line-height: 1.5rem;" },
    {
        class: "text-lg",
        property: "font-size: 1.125rem; line-height: 1.75rem;",
    },
    { class: "text-xl", property: "font-size: 1.25rem; line-height: 1.75rem;" },
    { class: "text-2xl", property: "font-size: 1.5rem; line-height: 2rem;" },

    { class: "font-light", property: "font-weight: 300;" },
    { class: "font-normal", property: "font-weight: 400;" },
    { class: "font-medium", property: "font-weight: 500;" },
    { class: "font-semibold", property: "font-weight: 600;" },
    { class: "font-bold", property: "font-weight: 700;" },

    { class: "italic", property: "font-style: italic;" },
    { class: "not-italic", property: "font-style: normal;" },

    { class: "leading-none", property: "line-height: 1;" },
    { class: "leading-tight", property: "line-height: 1.25;" },
    { class: "leading-snug", property: "line-height: 1.375;" },
    { class: "leading-normal", property: "line-height: 1.5;" },
    { class: "leading-relaxed", property: "line-height: 1.625;" },
    { class: "leading-loose", property: "line-height: 2;" },

    { class: "tracking-tighter", property: "letter-spacing: -0.05em;" },
    { class: "tracking-tight", property: "letter-spacing: -0.025em;" },
    { class: "tracking-normal", property: "letter-spacing: 0em;" },
    { class: "tracking-wide", property: "letter-spacing: 0.025em;" },
    { class: "tracking-wider", property: "letter-spacing: 0.05em;" },

    { class: "text-left", property: "text-align: left;" },
    { class: "text-center", property: "text-align: center;" },
    { class: "text-right", property: "text-align: right;" },

    { class: "underline", property: "text-decoration-line: underline;" },
    { class: "line-through", property: "text-decoration-line: line-through;" },
    { class: "no-underline", property: "text-decoration-line: none;" },

    // --- Colors (Text / Background / Border) ---
    { class: "text-red-500", property: "color: #ef4444;" },
    { class: "text-blue-600", property: "color: #2563eb;" },
    { class: "text-green-500", property: "color: #22c55e;" },
    { class: "text-gray-700", property: "color: #374151;" },

    { class: "bg-blue-500", property: "background-color: #3b82f6;" },
    { class: "bg-emerald-400", property: "background-color: #34d399;" },
    { class: "bg-gray-100", property: "background-color: #f3f4f6;" },
    { class: "bg-white", property: "background-color: #ffffff;" },
    { class: "bg-black", property: "background-color: #000000;" },

    { class: "border", property: "border-width: 1px;" },
    { class: "border-2", property: "border-width: 2px;" },
    { class: "border-0", property: "border-width: 0px;" },
    { class: "border-gray-200", property: "border-color: #e5e7eb;" },
    { class: "border-blue-500", property: "border-color: #3b82f6;" },

    { class: "rounded", property: "border-radius: 0.25rem;" },
    { class: "rounded-md", property: "border-radius: 0.375rem;" },
    { class: "rounded-lg", property: "border-radius: 0.5rem;" },
    { class: "rounded-full", property: "border-radius: 9999px;" },

    // --- Shadow / Ring / Outline ---
    {
        class: "shadow-sm",
        property: "box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);",
    },
    {
        class: "shadow",
        property:
            "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);",
    },
    {
        class: "shadow-md",
        property:
            "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);",
    },
    {
        class: "shadow-lg",
        property:
            "box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);",
    },
    { class: "shadow-none", property: "box-shadow: 0 0 #0000;" },

    {
        class: "outline-none",
        property: "outline: 2px solid transparent; outline-offset: 2px;",
    },

    // --- Opacity ---
    { class: "opacity-50", property: "opacity: 0.5;" },
    { class: "opacity-0", property: "opacity: 0;" },
    { class: "opacity-100", property: "opacity: 1;" },

    // --- Background helpers ---
    { class: "bg-cover", property: "background-size: cover;" },
    { class: "bg-contain", property: "background-size: contain;" },
    { class: "bg-center", property: "background-position: center;" },
    { class: "bg-no-repeat", property: "background-repeat: no-repeat;" },

    // --- Cursor / Pointer / Select ---
    { class: "cursor-pointer", property: "cursor: pointer;" },
    { class: "cursor-not-allowed", property: "cursor: not-allowed;" },
    { class: "pointer-events-none", property: "pointer-events: none;" },
    { class: "select-none", property: "user-select: none;" },
    { class: "select-text", property: "user-select: text;" },

    // --- Filters ---
    { class: "blur-sm", property: "filter: blur(4px);" },
    { class: "grayscale", property: "filter: grayscale(100%);" },
    { class: "invert", property: "filter: invert(100%);" },
    { class: "brightness-110", property: "filter: brightness(1.1);" },
    { class: "contrast-125", property: "filter: contrast(1.25);" },

    // --- Transforms ---
    { class: "transform", property: "transform: translate(0);" }, // 明示的な有効化用
    { class: "translate-x-4", property: "transform: translateX(1rem);" },
    { class: "translate-y-1/2", property: "transform: translateY(50%);" },
    { class: "rotate-45", property: "transform: rotate(45deg);" },
    { class: "scale-110", property: "transform: scale(1.1);" },
    { class: "-scale-x-100", property: "transform: scaleX(-1);" },

    // --- Transition / Animation ---
    {
        class: "transition",
        property:
            "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-duration: 150ms; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    },
    {
        class: "transition-colors",
        property:
            "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;",
    },
    { class: "duration-200", property: "transition-duration: 200ms;" },
    { class: "duration-300", property: "transition-duration: 300ms;" },
    {
        class: "ease-in-out",
        property: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    },
    { class: "delay-150", property: "transition-delay: 150ms;" },

    // --- Lists / Visibility / Misc ---
    { class: "list-disc", property: "list-style-type: disc;" },
    { class: "list-none", property: "list-style-type: none;" },
    { class: "visible", property: "visibility: visible;" },
    { class: "invisible", property: "visibility: hidden;" },
    {
        class: "antialiased",
        property:
            "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;",
    },

    // --- Utility combos you’ll use a lot ---
    {
        class: "sr-only",
        property:
            "position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;",
    },
];
