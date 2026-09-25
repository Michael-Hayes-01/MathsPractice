/*
 * ==========================================
 * SHARED SOUND + ANIMATION UTILITIES
 *
 * Used by MissingNum.html, Muliplication.html,
 * Division.html and MultDivPractice.html.
 * ==========================================
 */


/*
 * ==========================================
 * HAPPY SOUNDS (correct answer)
 * ==========================================
 */

const HAPPY_SOUNDS = [
    "happy/digitalstore07-love-you-daddy-430441.mp3",
    "happy/floraphonic-woman-cute-silly-ya-2-185319.mp3",
    "happy/freesound_community-good-6081.mp3",
    "happy/freesound_community-nice-sound-effect-95595.mp3",
    "happy/freesound_community-triumphant-yes-x2-103141.mp3",
    "happy/freesound_community-yay-6120.mp3",
    "happy/freesound_community-yay-6326.mp3",
    "happy/freesound_community-yes-laugh-82035.mp3",
    "happy/mrstokes302-you-win-sfx-mrstokes302-442128.mp3",
    "happy/sergequadrado-child-says-yes-113117.mp3",
    "happy/shut_up_ghost-cartoon-yay-140921.mp3",
    "happy/shut_up_ghost-i-love-you-cartoon-voice-136531.mp3",
    "happy/universfield-male-voice-letx27s-go-352481.mp3",
    "happy/universfield-yeah-boy-114748.mp3",
    "happy/u_2ttqv1v1rq-32_oh-yes-473891.mp3",
    "happy/u_o8xh7gwsrj-correct_answer_toy_bi-bling-476370.mp3"
];


/*
 * ==========================================
 * SAD SOUNDS (wrong answer)
 * ==========================================
 */

const SAD_SOUNDS = [
    "sad/apebble-fart-4-228244.mp3",
    "sad/apebble-fart-5-228245.mp3",
    "sad/beanfrog-proud-fart-288263.mp3",
    "sad/digitalstore07-baby-cry-430439.mp3",
    "sad/floraphonic-buzzer-18-203421.mp3",
    "sad/floraphonic-buzzer-4-183895.mp3",
    "sad/freesound_community-080208_uhh-excuse-you-83622.mp3",
    "sad/freesound_community-33-aburrida-46606.mp3",
    "sad/freesound_community-baby-cry-short-37093.mp3",
    "sad/freesound_community-low-no-82600.mp3",
    "sad/freesound_community-no-x5-95904.mp3",
    "sad/freesound_community-wet-fart-6139.mp3",
    "sad/universfield-child-voice-no-243751.mp3",
    "sad/universfield-fail-trombone-229173.mp3",
    "sad/universfield-funny-fail-02-277575.mp3",
    "sad/universfield-human-roar-250239.mp3",
    "sad/universfield-sad-trumpet-278822.mp3"
];


/*
 * ==========================================
 * PLAY ONE RANDOM SOUND FROM A LIST
 * ==========================================
 */

function playRandomSound(sounds) {

    const file =
        sounds[Math.floor(Math.random() * sounds.length)];

    const audio = new Audio(file);

    audio.play();
}


/*
 * ==========================================
 * HAPPY SOUND (correct answer)
 * ==========================================
 */

function playHappySound() {

    playRandomSound(HAPPY_SOUNDS);
}


/*
 * ==========================================
 * SAD SOUND (wrong answer)
 * ==========================================
 */

function playSadSound() {

    playRandomSound(SAD_SOUNDS);
}


/*
 * ==========================================
 * GREEN FLASH
 * ==========================================
 */

function flashGreen() {

    document.body.classList.remove(
        "flash-green"
    );

    void document.body.offsetWidth;

    document.body.classList.add(
        "flash-green"
    );

    setTimeout(function () {

        document.body.classList.remove(
            "flash-green"
        );

    }, 1700);
}


/*
 * ==========================================
 * RED FLASH
 * ==========================================
 */

function flashRed() {

    document.body.classList.remove(
        "flash-red"
    );

    void document.body.offsetWidth;

    document.body.classList.add(
        "flash-red"
    );

    setTimeout(function () {

        document.body.classList.remove(
            "flash-red"
        );

    }, 900);
}


/*
 * ==========================================
 * FIREWORK
 * ==========================================
 */

function launchFirework(x, y) {

    const fireworks =
        document.getElementById("fireworks");

    const firework =
        document.createElement("div");

    firework.className = "firework";

    firework.style.left = x + "px";
    firework.style.top = y + "px";

    fireworks.appendChild(firework);


    const numberOfSparks = 24;


    for (
        let i = 0;
        i < numberOfSparks;
        i++
    ) {

        const spark =
            document.createElement("div");

        spark.className = "spark";


        const angle =
            (360 / numberOfSparks) * i;


        const distance =
            80 + Math.random() * 100;


        spark.style.setProperty(
            "--angle",
            angle + "deg"
        );

        spark.style.setProperty(
            "--distance",
            distance + "px"
        );


        const colors = [
            "#ff0000",
            "#ffcc00",
            "#00aaff",
            "#ff00cc",
            "#00cc66",
            "#ff6600"
        ];


        spark.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        firework.appendChild(spark);
    }


    setTimeout(function () {

        firework.remove();

    }, 1000);
}


/*
 * ==========================================
 * LAUNCH FIREWORKS
 * ==========================================
 */

function launchFireworks() {

    const positions = [

        [
            window.innerWidth * 0.15,
            window.innerHeight * 0.28
        ],

        [
            window.innerWidth * 0.85,
            window.innerHeight * 0.28
        ],

        [
            window.innerWidth * 0.50,
            window.innerHeight * 0.16
        ],

        [
            window.innerWidth * 0.30,
            window.innerHeight * 0.55
        ],

        [
            window.innerWidth * 0.70,
            window.innerHeight * 0.55
        ],

        [
            window.innerWidth * 0.10,
            window.innerHeight * 0.60
        ],

        [
            window.innerWidth * 0.90,
            window.innerHeight * 0.60
        ],

        [
            window.innerWidth * 0.50,
            window.innerHeight * 0.45
        ]

    ];


    positions.forEach(
        function (position, index) {

            setTimeout(function () {

                launchFirework(
                    position[0],
                    position[1]
                );

            }, index * 130);

        }
    );
}


/*
 * ==========================================
 * CONFETTI
 * ==========================================
 */

function launchConfetti() {

    const container =
        document.getElementById("fireworks");

    const colors = [
        "#ff0000",
        "#ffcc00",
        "#00aaff",
        "#ff00cc",
        "#00cc66",
        "#ff6600"
    ];

    const pieceCount = 70;


    for (
        let i = 0;
        i < pieceCount;
        i++
    ) {

        const piece =
            document.createElement("div");

        const startX =
            Math.random() * window.innerWidth;

        const size =
            6 + Math.random() * 6;

        piece.style.position = "absolute";
        piece.style.left = startX + "px";
        piece.style.top = "-20px";
        piece.style.width = size + "px";
        piece.style.height = (size * 0.4) + "px";
        piece.style.background =
            colors[
                Math.floor(Math.random() * colors.length)
            ];
        piece.style.borderRadius = "2px";

        container.appendChild(piece);


        const endY =
            window.innerHeight + 40;

        const drift =
            (Math.random() - 0.5) * 220;

        const rotation =
            360 + Math.random() * 720;

        const duration =
            1800 + Math.random() * 1200;

        const delay =
            Math.random() * 300;


        const anim = piece.animate(
            [
                {
                    transform: "translate(0, 0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translate(${drift}px, ${endY}px) rotate(${rotation}deg)`,
                    opacity: 1,
                    offset: 0.85
                },
                {
                    transform: `translate(${drift}px, ${endY}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            piece.remove();
        };
    }
}


/*
 * ==========================================
 * STAR BURST
 * ==========================================
 */

function launchStars() {

    const container =
        document.getElementById("fireworks");

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;

    const glyphs = [
        "⭐",
        "✨",
        "🌟",
        "💫"
    ];

    const starCount = 22;


    for (
        let i = 0;
        i < starCount;
        i++
    ) {

        const star =
            document.createElement("div");

        star.textContent =
            glyphs[
                Math.floor(Math.random() * glyphs.length)
            ];

        star.style.position = "absolute";
        star.style.left = centerX + "px";
        star.style.top = centerY + "px";
        star.style.fontSize =
            (18 + Math.random() * 18) + "px";

        container.appendChild(star);


        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            150 + Math.random() * 260;

        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        const duration =
            900 + Math.random() * 500;

        const delay =
            Math.random() * 150;


        const anim = star.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) translate(0, 0) scale(0.3)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(-50%, -50%) translate(${dx * 0.6}px, ${dy * 0.6}px) scale(1.1)`,
                    opacity: 1,
                    offset: 0.6
                },
                {
                    transform:
                        `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(1)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            star.remove();
        };
    }
}


/*
 * ==========================================
 * RISING BALLOONS
 * ==========================================
 */

function launchBalloons() {

    const container =
        document.getElementById("fireworks");

    const colors = [
        "#ff4d6d",
        "#ffd23f",
        "#3bceac",
        "#5390d9",
        "#f77f00",
        "#c77dff"
    ];

    const balloonCount = 9;

    const riseDistance =
        window.innerHeight + 150;


    for (
        let i = 0;
        i < balloonCount;
        i++
    ) {

        const balloon =
            document.createElement("div");

        const x =
            5 + Math.random() * 90;

        balloon.style.position = "absolute";
        balloon.style.left = x + "vw";
        balloon.style.top = window.innerHeight + "px";
        balloon.style.width = "34px";
        balloon.style.height = "42px";
        balloon.style.background =
            colors[
                Math.floor(Math.random() * colors.length)
            ];
        balloon.style.borderRadius =
            "50% 50% 50% 50% / 60% 60% 40% 40%";
        balloon.style.boxShadow =
            "inset -4px -4px 6px rgba(0, 0, 0, 0.15)";

        container.appendChild(balloon);


        const sway =
            (Math.random() - 0.5) * 70;

        const duration =
            2200 + Math.random() * 1000;

        const delay =
            i * 80;


        const anim = balloon.animate(
            [
                {
                    transform: "translate(0, 0)",
                    opacity: 1
                },
                {
                    transform: `translate(${sway}px, -${riseDistance * 0.85}px)`,
                    opacity: 1,
                    offset: 0.85
                },
                {
                    transform: `translate(${sway}px, -${riseDistance}px)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            balloon.remove();
        };
    }
}


/*
 * ==========================================
 * EMOJI RAIN
 * ==========================================
 */

function launchEmojiRain() {

    const container =
        document.getElementById("fireworks");

    const glyphs = [
        "🎉",
        "🎊",
        "🥳",
        "👏",
        "🏆"
    ];

    const emojiCount = 26;


    for (
        let i = 0;
        i < emojiCount;
        i++
    ) {

        const emoji =
            document.createElement("div");

        emoji.textContent =
            glyphs[
                Math.floor(Math.random() * glyphs.length)
            ];

        const startX =
            Math.random() * window.innerWidth;

        emoji.style.position = "absolute";
        emoji.style.left = startX + "px";
        emoji.style.top = "-40px";
        emoji.style.fontSize =
            (20 + Math.random() * 16) + "px";

        container.appendChild(emoji);


        const endY =
            window.innerHeight + 60;

        const sway =
            (Math.random() - 0.5) * 160;

        const rotation =
            (Math.random() - 0.5) * 180;

        const duration =
            2200 + Math.random() * 1400;

        const delay =
            Math.random() * 400;


        const anim = emoji.animate(
            [
                {
                    transform: "translate(0, 0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${sway * 0.5}px, ${endY * 0.5}px) rotate(${rotation * 0.5}deg)`,
                    opacity: 1,
                    offset: 0.5
                },
                {
                    transform:
                        `translate(${sway}px, ${endY}px) rotate(${rotation}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-in",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            emoji.remove();
        };
    }
}


/*
 * ==========================================
 * RIPPLE RINGS
 * ==========================================
 */

function launchRipples() {

    const container =
        document.getElementById("fireworks");

    const centerX =
        window.innerWidth / 2;

    const centerY =
        window.innerHeight / 2;

    const colors = [
        "#ff0000",
        "#ffcc00",
        "#00aaff",
        "#ff00cc",
        "#00cc66",
        "#ff6600"
    ];

    const ringCount = 6;


    for (
        let i = 0;
        i < ringCount;
        i++
    ) {

        const ring =
            document.createElement("div");

        ring.style.position = "absolute";
        ring.style.left = centerX + "px";
        ring.style.top = centerY + "px";
        ring.style.width = "20px";
        ring.style.height = "20px";
        ring.style.borderRadius = "50%";
        ring.style.border =
            `4px solid ${colors[i % colors.length]}`;

        container.appendChild(ring);


        const maxScale =
            25 + Math.random() * 10;

        const duration =
            1200 + Math.random() * 400;

        const delay =
            i * 150;


        const anim = ring.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(-50%, -50%) scale(${maxScale})`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            ring.remove();
        };
    }
}


/*
 * ==========================================
 * BOUNCING POP-UPS
 * ==========================================
 */

function launchPopUps() {

    const container =
        document.getElementById("fireworks");

    const glyphs = [
        "😄",
        "🙌",
        "💥",
        "🥇",
        "🎈"
    ];

    const popCount = 10;


    for (
        let i = 0;
        i < popCount;
        i++
    ) {

        const pop =
            document.createElement("div");

        pop.textContent =
            glyphs[
                Math.floor(Math.random() * glyphs.length)
            ];

        const x =
            5 + Math.random() * 90;

        pop.style.position = "absolute";
        pop.style.left = x + "vw";
        pop.style.top = window.innerHeight + "px";
        pop.style.fontSize =
            (26 + Math.random() * 14) + "px";

        container.appendChild(pop);


        const peakHeight =
            window.innerHeight * (0.35 + Math.random() * 0.25);

        const duration =
            1000 + Math.random() * 300;

        const delay =
            i * 90;


        const anim = pop.animate(
            [
                {
                    transform: "translate(0, 0) scale(0.6)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(0, -${peakHeight}px) scale(1.15)`,
                    opacity: 1,
                    offset: 0.45
                },
                {
                    transform:
                        `translate(0, -${peakHeight * 0.85}px) scale(1)`,
                    opacity: 1,
                    offset: 0.65
                },
                {
                    transform:
                        `translate(0, -${peakHeight * 0.95}px) scale(1.05)`,
                    opacity: 1,
                    offset: 0.8
                },
                {
                    transform:
                        `translate(0, -${peakHeight * 0.9}px) scale(1)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            pop.remove();
        };
    }
}


/*
 * ==========================================
 * RAINBOW ARC
 * ==========================================
 */

function launchRainbowArc() {

    const container =
        document.getElementById("fireworks");

    const colors = [
        "#ff0000",
        "#ff9900",
        "#ffee00",
        "#33cc33",
        "#3399ff",
        "#6633cc"
    ];

    const centerX =
        window.innerWidth / 2;

    const baseline =
        window.innerHeight * 0.85;

    const baseSize = 520;

    const bandThickness = 24;


    const wrapper =
        document.createElement("div");

    wrapper.style.position = "absolute";
    wrapper.style.left = "0";
    wrapper.style.top = "0";

    container.appendChild(wrapper);


    colors.forEach(function (color, i) {

        const size =
            baseSize - i * (bandThickness * 2);

        const band =
            document.createElement("div");

        band.style.position = "absolute";
        band.style.left = (centerX - size / 2) + "px";
        band.style.top = (baseline - size / 2) + "px";
        band.style.width = size + "px";
        band.style.height = size + "px";
        band.style.borderRadius = "50%";
        band.style.border =
            bandThickness + "px solid " + color;
        band.style.clipPath =
            "polygon(0 0, 100% 0, 100% 50%, 0 50%)";

        wrapper.appendChild(band);
    });


    const anim = wrapper.animate(
        [
            {
                opacity: 0,
                transform: "translateY(40px) scale(0.7)"
            },
            {
                opacity: 1,
                transform: "translateY(0) scale(1)",
                offset: 0.25
            },
            {
                opacity: 1,
                transform: "translateY(0) scale(1)",
                offset: 0.75
            },
            {
                opacity: 0,
                transform: "translateY(-20px) scale(1.05)"
            }
        ],
        {
            duration: 2600,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );

    anim.onfinish = function () {

        wrapper.remove();
    };
}


/*
 * ==========================================
 * UNICORN
 * ==========================================
 */

function launchUnicorn() {

    const container =
        document.getElementById("fireworks");

    const y =
        window.innerHeight * (0.25 + Math.random() * 0.4);

    const direction =
        Math.random() < 0.5 ? 1 : -1;

    const startX =
        direction === 1 ? -80 : window.innerWidth + 80;

    const endX =
        direction === 1 ? window.innerWidth + 80 : -80;

    const flip =
        direction === 1 ? "scaleX(1)" : "scaleX(-1)";

    const duration = 1800;


    const unicorn =
        document.createElement("div");

    unicorn.textContent = "🦄";
    unicorn.style.position = "absolute";
    unicorn.style.left = startX + "px";
    unicorn.style.top = y + "px";
    unicorn.style.fontSize = "56px";

    container.appendChild(unicorn);


    const anim = unicorn.animate(
        [
            {
                left: startX + "px",
                transform: flip + " translateY(0)"
            },
            {
                left: (startX + (endX - startX) * 0.5) + "px",
                transform: flip + " translateY(-20px)",
                offset: 0.5
            },
            {
                left: endX + "px",
                transform: flip + " translateY(0)"
            }
        ],
        {
            duration: duration,
            easing: "ease-in-out",
            fill: "forwards"
        }
    );


    /*
     * Sparkle trail following the unicorn.
     */

    const sparkleCount = 14;


    for (
        let i = 0;
        i < sparkleCount;
        i++
    ) {

        setTimeout(function () {

            const progress = i / sparkleCount;

            const sparkleX =
                startX + (endX - startX) * progress;

            const sparkle =
                document.createElement("div");

            sparkle.textContent = "✨";
            sparkle.style.position = "absolute";
            sparkle.style.left = sparkleX + "px";
            sparkle.style.top =
                (y + 20 + Math.random() * 10) + "px";
            sparkle.style.fontSize = "18px";

            container.appendChild(sparkle);


            const sparkleAnim = sparkle.animate(
                [
                    { opacity: 1, transform: "scale(1)" },
                    { opacity: 0, transform: "scale(0.3)" }
                ],
                {
                    duration: 500,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            sparkleAnim.onfinish = function () {

                sparkle.remove();
            };

        }, i * (duration / sparkleCount));
    }


    anim.onfinish = function () {

        unicorn.remove();
    };
}


/*
 * ==========================================
 * CAT PARADE
 * ==========================================
 */

function launchCats() {

    const container =
        document.getElementById("fireworks");

    const glyphs = [
        "🐱",
        "🐈"
    ];

    const catCount = 5;

    const y =
        window.innerHeight - 110;

    const endX =
        window.innerWidth + 60;


    for (
        let i = 0;
        i < catCount;
        i++
    ) {

        const cat =
            document.createElement("div");

        cat.textContent =
            glyphs[
                Math.floor(Math.random() * glyphs.length)
            ];

        cat.style.position = "absolute";
        cat.style.top = y + "px";
        cat.style.left = "-60px";
        cat.style.fontSize =
            (70 + Math.random() * 20) + "px";

        container.appendChild(cat);


        const duration =
            (2400 + Math.random() * 800) * 3;

        const delay =
            i * 220;


        const anim = cat.animate(
            [
                {
                    left: "-60px",
                    transform: "translateY(0)"
                },
                {
                    left: (endX * 0.5) + "px",
                    transform: "translateY(-14px)",
                    offset: 0.5
                },
                {
                    left: endX + "px",
                    transform: "translateY(0)"
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-in-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            cat.remove();
        };
    }
}


/*
 * ==========================================
 * DOG PARADE
 * ==========================================
 */

function launchDogs() {

    const container =
        document.getElementById("fireworks");

    const glyphs = [
        "🐶",
        "🐕"
    ];

    const dogCount = 5;

    const y =
        window.innerHeight - 110;

    const travel =
        window.innerWidth + 120;


    for (
        let i = 0;
        i < dogCount;
        i++
    ) {

        const dog =
            document.createElement("div");

        dog.textContent =
            glyphs[
                Math.floor(Math.random() * glyphs.length)
            ];

        dog.style.position = "absolute";
        dog.style.top = y + "px";
        dog.style.right = "-60px";
        dog.style.fontSize =
            (70 + Math.random() * 20) + "px";

        container.appendChild(dog);


        const duration =
            (1800 + Math.random() * 700) * 3;

        const delay =
            i * 180;


        const anim = dog.animate(
            [
                {
                    transform: "translateX(0) translateY(0)"
                },
                {
                    transform:
                        `translateX(-${travel * 0.5}px) translateY(-18px)`,
                    offset: 0.5
                },
                {
                    transform:
                        `translateX(-${travel}px) translateY(0)`
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-in-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            dog.remove();
        };
    }
}


/*
 * ==========================================
 * FLAMINGO PARADE
 * ==========================================
 */

function launchFlamingos() {

    const container =
        document.getElementById("fireworks");

    const flamingoCount = 5;

    const y =
        window.innerHeight - 110;

    const endX =
        window.innerWidth + 60;


    for (
        let i = 0;
        i < flamingoCount;
        i++
    ) {

        const flamingo =
            document.createElement("div");

        flamingo.textContent = "🦩";

        flamingo.style.position = "absolute";
        flamingo.style.top = y + "px";
        flamingo.style.left = "-60px";
        flamingo.style.fontSize =
            (70 + Math.random() * 20) + "px";

        container.appendChild(flamingo);


        const duration =
            (2400 + Math.random() * 800) * 3;

        const delay =
            i * 220;


        const anim = flamingo.animate(
            [
                {
                    left: "-60px",
                    transform: "translateY(0)"
                },
                {
                    left: (endX * 0.5) + "px",
                    transform: "translateY(-14px)",
                    offset: 0.5
                },
                {
                    left: endX + "px",
                    transform: "translateY(0)"
                }
            ],
            {
                duration: duration,
                delay: delay,
                easing: "ease-in-out",
                fill: "forwards"
            }
        );

        anim.onfinish = function () {

            flamingo.remove();
        };
    }
}


/*
 * ==========================================
 * BOUNCING TEXT
 *
 * "Daddy Loves Mia" bounces around the
 * screen like a DVD logo, changing color
 * every time it hits an edge.
 * ==========================================
 */

function launchBouncingText() {

    const container =
        document.getElementById("fireworks");

    const colors = [
        "#ff3d81",
        "#ff9900",
        "#33cc33",
        "#3399ff",
        "#9933ff",
        "#ff5050"
    ];

    const text =
        document.createElement("div");

    text.textContent = "Daddy Loves Mia";

    text.style.position = "absolute";
    text.style.left = "0px";
    text.style.top = "0px";
    text.style.fontSize = "32px";
    text.style.fontWeight = "bold";
    text.style.fontFamily = "Arial, sans-serif";
    text.style.color = colors[0];
    text.style.textShadow =
        "2px 2px 4px rgba(0, 0, 0, 0.25)";
    text.style.whiteSpace = "nowrap";
    text.style.padding = "6px 14px";

    container.appendChild(text);


    const rect = text.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    let x =
        Math.random() * Math.max(window.innerWidth - width, 0);

    let y =
        Math.random() * Math.max(window.innerHeight - height, 0);

    let vx =
        (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random() * 2);

    let vy =
        (Math.random() < 0.5 ? -1 : 1) * (3 + Math.random() * 2);

    let colorIndex = 0;

    const duration = 4000;

    const startTime = performance.now();


    function bounceColor() {

        colorIndex = (colorIndex + 1) % colors.length;

        text.style.color = colors[colorIndex];
    }


    function step(now) {

        const elapsed = now - startTime;

        x += vx;
        y += vy;


        if (x <= 0) {

            x = 0;
            vx = -vx;
            bounceColor();
        }

        if (x + width >= window.innerWidth) {

            x = window.innerWidth - width;
            vx = -vx;
            bounceColor();
        }

        if (y <= 0) {

            y = 0;
            vy = -vy;
            bounceColor();
        }

        if (y + height >= window.innerHeight) {

            y = window.innerHeight - height;
            vy = -vy;
            bounceColor();
        }


        text.style.transform =
            `translate(${x}px, ${y}px)`;


        if (elapsed < duration) {

            requestAnimationFrame(step);

        } else {

            const fade = text.animate(
                [
                    { opacity: 1 },
                    { opacity: 0 }
                ],
                {
                    duration: 400,
                    fill: "forwards"
                }
            );

            fade.onfinish = function () {

                text.remove();
            };
        }
    }


    requestAnimationFrame(step);
}


/*
 * ==========================================
 * HAPPY EFFECTS
 *
 * One is chosen at random per correct answer.
 * ==========================================
 */

const HAPPY_EFFECTS = [
    launchFireworks,
    launchConfetti,
    launchStars,
    launchBalloons,
    launchEmojiRain,
    launchRipples,
    launchPopUps,
    launchRainbowArc,
    launchUnicorn,
    launchCats,
    launchDogs,
    launchFlamingos,
    launchBouncingText
];


/*
 * ==========================================
 * CORRECT ANSWER CELEBRATION
 * ==========================================
 */

function celebrateCorrectAnswer() {

    flashGreen();

    const effect =
        HAPPY_EFFECTS[
            Math.floor(Math.random() * HAPPY_EFFECTS.length)
        ];

    effect();
}
