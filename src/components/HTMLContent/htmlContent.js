import React, { useState, useEffect, useRef } from 'react'
import { useThree } from 'react-three-fiber'
import { Html } from '@react-three/drei'

function HtmlContent() {
  const { size } = useThree();
  const [open, setOpen] = useState(true)

  return (
    <Html
      style={{
        position: 'absolute',
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height
      }}>
        <div className="container">
            <h2>
                Mimikyu
            </h2>
            <div className= {`text-container ${open ? '' : 'hidden'} `} >
            <div className="description-container">
            <p>
            Mimikyu is a small Pokémon whose body is almost entirely hidden under an old rag. Its small size makes it one of, if not the shortest Ghost-type. 
            <br/>
            <br/>
            Its beady black eyes are visible through holes in the body of its disguise, and the fringe of an amorphous foot or lower body is visible under the hem. Occasionally, it will also extend a black appendage from under its rag. The veil itself resembles a Pikachu. The cloth is yellow with black-tipped ears. The Pikachu face appears to be drawn with crayons, consisting of black eyes, red cheeks, and a squiggly black mouth. The head is hollow and can be used to store objects. Mimikyu also carries a small stick resembling a lightning bolt to create a tail for its costume. When its disguise is damaged, the costume's head droops limply backward, revealing Mimikyu's ruse. Larger rips in the costume are accompanied by shadowy vapors pouring out from whatever is hidden within.
            <br/>
            <br/>
            A lonely Pokémon, Mimikyu is always covered by its disguise. It is unknown what Mimikyu's true appearance looks like. Since this Pokémon is weakened by sunlight, it is rumored that the veil is used for protection. It is believed that seeing its true form will cause a mysterious illness or even a painful death. Because of this, Mimikyu will become agitated and violently stop anyone from attempting to look underneath its rag. Mimikyu's disguise is modeled after Pikachu because of the popularity of Pikachu-styled merchandise, thinking that its disguise would allow it to make friends with people.
            <br/>
            <br/>
            Unfortunately, this attempt makes its disguise look more creepy. The rag it wears allows Mimikyu to avoid attacks. If its rag is damaged or its neck is broken, it will spend all night patching it in front of a mirror as if its life depends on it. Repairing the rag correctly is often difficult for Mimikyu, so it cries a lot on the inside. It then seeks revenge on the one that damaged it, fearing that its true identity could have been exposed. Unforgiving, Mimikyu will take down the culprit to the point of costing its life in the process. 
            </p>
            </div>
            </div>
            <button onClick={() => setOpen(!open)}>
                {
                    open ? <span>Close description</span> : <span>Show description</span>
                }
            </button>
        </div>
    </Html>
  )
}

export default HtmlContent;