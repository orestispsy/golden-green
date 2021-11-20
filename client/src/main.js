import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

export default function Main({ chapter }) {
    useEffect(
        function () {
            if (chapter) {
                document.getElementById(`text${chapter}`).scrollIntoView({
                    behavior: "smooth",
                });
            }
        },
        [chapter]
    );

   

    return (
        <div className="mainContainer">
            <div className="text" id="text1">
                Test -- The olive, botanical name Olea europaea, meaning
                "European olive", is a species of small tree in the family
                Oleaceae, found traditionally in the Mediterranean Basin. The
                species is cultivated in all the countries of the Mediterranean,
                as well as in Australia, New Zealand, North and South America
                and South Africa.[2][3] Olea europaea is the type species for
                the genus Olea. The olive's fruit, also called an "olive", is of
                major agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). -- Test
            </div>
            <div className="text" id="text2">
                Test -- The olive, botanical name Olea europaea, meaning
                "European olive", is a species of small tree in the family
                Oleaceae, found traditionally in the Mediterranean Basin. The
                species is cultivated in all the countries of the Mediterranean,
                as well as in Australia, New Zealand, North and South America
                and South Africa.[2][3] Olea europaea is the type species for
                the genus Olea. The olive's fruit, also called an "olive", is of
                major agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). -- Test
            </div>
            <div className="text" id="text3">
                Test -- The olive, botanical name Olea europaea, meaning
                "European olive", is a species of small tree in the family
                Oleaceae, found traditionally in the Mediterranean Basin. The
                species is cultivated in all the countries of the Mediterranean,
                as well as in Australia, New Zealand, North and South America
                and South Africa.[2][3] Olea europaea is the type species for
                the genus Olea. The olive's fruit, also called an "olive", is of
                major agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). The
                olive, botanical name Olea europaea, meaning "European olive",
                is a species of small tree in the family Oleaceae, found
                traditionally in the Mediterranean Basin. The species is
                cultivated in all the countries of the Mediterranean, as well as
                in Australia, New Zealand, North and South America and South
                Africa.[2][3] Olea europaea is the type species for the genus
                Olea. The olive's fruit, also called an "olive", is of major
                agricultural importance in the Mediterranean region as the
                source of olive oil; it is one of the core ingredients in
                Mediterranean cuisine. The tree and its fruit give their name to
                the plant family, which also includes species such as lilacs,
                jasmine, Forsythia, and the true ash trees (Fraxinus). -- Test
            </div>
        </div>
    );
}
