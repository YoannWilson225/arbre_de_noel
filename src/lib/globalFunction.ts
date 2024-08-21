import ReactDOM from "react-dom";

const preloader_ = (): void => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    const preloader = document.getElementById("preloader");

    if (preloader) {
        if (!isMobile) {
            setTimeout(() => {
                preloader.classList.add("preloaded");
            }, 800);
            setTimeout(() => {
                preloader.remove();
            }, 2000);
        } else {
            preloader.remove();
        }
    }
};

export const customCursor = (): void => {
    const myCursor = document.querySelectorAll<HTMLElement>(".mouse-cursor");
    const hamburger = document.querySelector<HTMLElement>(".hamburger");
    const kura_tm_topbar = document.querySelector<HTMLElement>(".kura_tm_topbar");
    const pointer = document.querySelector<HTMLElement>(".cursor-pointer");
    const e = document.querySelector<HTMLElement>(".cursor-inner");
    const t = document.querySelector<HTMLElement>(".cursor-outer");

    const mouseEvent = (element: HTMLElement) => {
        const domElement = ReactDOM.findDOMNode(element) as HTMLElement;
        domElement.addEventListener("mouseenter", () => {
            e?.classList.add("cursor-hover");
            t?.classList.add("cursor-hover");
        });
        domElement.addEventListener("mouseleave", () => {
            e?.classList.remove("cursor-hover");
            t?.classList.remove("cursor-hover");
        });
    };

    if (myCursor.length && document.body) {
        let n: number;
        let i = 0;
        let o = false;

        window.onmousemove = (s: MouseEvent) => {
            if (!o) {
                t!.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
            }
            e!.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
            n = s.clientY;
            i = s.clientX;
        };

        document.body.addEventListener("mouseenter", () => {
            const aTags = document.querySelectorAll<HTMLElement>("a");
            e?.classList.add("cursor-inner");
            t?.classList.add("cursor-outer");

            aTags.forEach(mouseEvent);

            if (hamburger) mouseEvent(hamburger);
            if (kura_tm_topbar) mouseEvent(kura_tm_topbar);
            if (pointer) mouseEvent(pointer);
        });

        e!.style.visibility = "visible";
        t!.style.visibility = "visible";
    }
};

export const preloader = (): void => {
    preloader_();
    setTimeout(() => {
        document.querySelector("body")?.classList.add("opened");
    }, 3000);
};

export const aTagClick = (): void => {
    const aTags = document.querySelectorAll<HTMLElement>("[href='#']");
    aTags.forEach((a) => {
        const domElement = ReactDOM.findDOMNode(a) as HTMLElement;
        domElement.addEventListener("click", (e: MouseEvent) => {
            e.preventDefault();
        });
    });
};

export const dataImage = (): void => {
    const elements = document.querySelectorAll<HTMLElement>("[data-img-url]");
    elements.forEach((element) => {
        const url = element.getAttribute("data-img-url");
        if (url) {
            element.style.backgroundImage = `url(${url})`;
        }
    });
};

export const imgToSVG = (): void => {
    document.querySelectorAll<HTMLImageElement>("img.svg").forEach((el) => {
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");

        if (imgURL) {
            fetch(imgURL)
                .then((data) => data.text())
                .then((response) => {
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(response, "text/html");
                    const svg = xmlDoc.querySelector("svg");

                    if (svg) {
                        if (imgID) {
                            svg.setAttribute("id", imgID);
                        }

                        if (imgClass) {
                            svg.setAttribute("class", `${imgClass} replaced-svg`);
                        }

                        svg.removeAttribute("xmlns:a");

                        if (el.parentNode) {
                            el.parentNode.replaceChild(svg, el);
                        }
                    }
                });
        }
    });
};

export const activeSection = (value: string): void => {
    const sections = document.querySelectorAll<HTMLElement>(".edrea_tm_section");
    sections.forEach((section) => {
        const id = section.getAttribute("id");
        if (id === value) {
            section.className = "edrea_tm_section active wow animated fadeInUp";
        } else {
            section.className = "edrea_tm_section hidden animated";
        }
    });
};

export const activeSkillProgress = (): void => {
    const progressInner = document.querySelectorAll<HTMLElement>(".skillsInner___");
    const triggerBottom = (window.innerHeight / 5) * 5;

    progressInner.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        const boxElement = box.getElementsByClassName("bar")[0] as HTMLElement;
        const label = box.getElementsByClassName("label")[0] as HTMLElement;
        const number = box.getElementsByClassName("number")[0] as HTMLElement;
        const pWidth = box.getAttribute("data-value");
        const pColor = box.getAttribute("data-color");

        if (boxTop < triggerBottom) {
            boxElement.classList.add("open");
            label.classList.add("opened");
            if (pWidth) number.style.right = `${100 - parseInt(pWidth)}%`;
            const barIn = boxElement.getElementsByClassName("bar_in")[0] as HTMLElement;
            if (barIn && pWidth) {
                barIn.style.width = `${pWidth}%`;
                if (pColor) {
                    barIn.style.backgroundColor = pColor;
                }
            }
        } else {
            boxElement.classList.remove("open");
            label.classList.remove("opened");
            number.style.right = `120%`;
        }
    });
};

export const scrollSection = (): void => {
    const sections = document.querySelectorAll<HTMLElement>(".orido_tm_section");
    const navLi = document.querySelectorAll<HTMLElement>(".anchor_nav li");
    let current: string | null = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("current");
        const href = li.querySelector("a")?.getAttribute("href");
        if (href === `#${current}`) {
            li.classList.add("current");
        }
    });

    hashtag();
};

export const stickyNav = (): void => {
    const offset = window.scrollY;
    const stickys = document.querySelectorAll<HTMLElement>(".orido_tm_header");
    stickys.forEach((sticky) => {
        if (offset > 100) {
            sticky.classList.add("animate");
        } else {
            sticky.classList.remove("animate");
        }
    });
};

export const scrollTop = (): void => {
    const bar = document.querySelector<HTMLElement>(".progressbar");
    const line = document.querySelector<HTMLElement>(".progressbar .line");
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const winScroll = window.scrollY;
    const value = (winScroll / (documentHeight - windowHeight)) * 100;

    if (winScroll > 100) {
        bar?.classList.add("animate");
        if (line) line.style.height = `${value}%`;
    } else {
        bar?.classList.remove("animate");
    }
};

export const filter_hashtag = (): void => {
    const ccc = document.querySelector<HTMLElement>(".orido_tm_informations .right .filter .ccc");
    const current = document.querySelector<HTMLElement>(".orido_tm_informations .right .filter .current");
    const links = document.querySelectorAll<HTMLElement>(".orido_tm_informations .right .filter a");
    const filter = document.querySelector<HTMLElement>(".orido_tm_informations .right .filter");

    links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            currentLinkFilter(ccc, link);
        });
    });

    filter?.addEventListener("mouseleave", () => {
        currentLinkFilter(ccc, current);
    });

    currentLinkFilter(ccc, current);
};

function currentLinkFilter(ccc: HTMLElement | null, e: HTMLElement | null): void {
    if (!e || !ccc) return;

    const left = e.offsetLeft;
    const width = e.offsetWidth + 80;
    const menuleft = document.querySelector<HTMLElement>(".orido_tm_informations .right .filter")?.offsetLeft || 0;

    ccc.style.left = `${left - menuleft - 40}px`;
    ccc.style.width = `${width}px`;
}

export const hashtag_ = (): void => {
    hashtag();
};

const hashtag = (): void => {
    const ccc = document.querySelector<HTMLElement>(".orido_tm_header .menu .ccc");
    const current = document.querySelector<HTMLElement>(".orido_tm_header .menu .current a");

    currentLink(ccc, current);
};

function currentLink(ccc: HTMLElement | null, e: HTMLElement | null): void {
    if (!e || !ccc) return;

    const left = e.offsetLeft;
    const width = e.offsetWidth;

    ccc.style.left = `${left}px`;
    ccc.style.width = `${width}px`;
}

// export const Servicehashtag = (): void => {
//   const ccc = document.querySelector<HTMLElement>(".orido_tm_service .ccc");
//   const current = document.querySelector<HTMLElement>(".orido_tm_service .current");
//   const aTags = document.querySelectorAll<HTMLElement>(".orido_tm_service .service_list ul li");
//   const filter = document.querySelector<HTMLElement>(".orido_tm_service .service_list");

//   aTags.forEach((aTag) => {
//     aTag.addEventListener("mouseenter", () => {
//       currentLinkService(ccc, aTag);
//     });
//   });

//   filter?.addEventListener("mouseleave", () => {
//     currentLinkService(ccc, current);
//   });

//   currentLinkService(ccc, current);
// };

// const getSiblings = (node: HTMLElement): HTMLElement[] => {
//   return [...node.parentNode!.children].filter((c) => c !== node) as HTMLElement[];
// };

// function currentLinkService(ccc: HTMLElement | null, e: HTMLElement | null): void {
//   if (!e || !ccc) return;

//   const siblings = getSiblings(e);
//   siblings.forEach((element) => {
//     element.classList.remove("current");
//   });

//   e.classList.add("current");

//   const topOff = e.offsetTop;
//   const height = e.offsetHeight;

//   ccc.style.top = `${topOff}px`;
//   ccc.style.height = `${height}px`;
// }
