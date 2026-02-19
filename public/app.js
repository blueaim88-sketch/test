let SCORING = null;

const stateMap = {
  "국밥":"기본 회복 상태",
  "설렁탕":"보호 회복 상태",
  "김치찌개":"칼칼 해소 상태",
  "된장찌개":"정서 안정 상태",
  "잔치국수":"편안 안정 상태",
  "떡볶이":"감정 발산 상태",
  "제육볶음":"에너지 추진 상태",
  "치킨":"축하 공유 상태",
  "삼겹살":"관계 확장 상태",
  "비빔밥":"균형 조절 상태",
  "김밥":"간편 안정 상태",
  "냉면":"과열 리셋 상태",
  "콩국수":"정적 회복 상태",
  "비빔국수":"자극 해소 상태",
  "회덮밥":"활력 충전 상태",
  "라면":"즉각 위로 상태"
};

const stateMapEn = {
  "국밥":"Base recovery mode",
  "설렁탕":"Gentle recovery mode",
  "김치찌개":"Spicy relief mode",
  "된장찌개":"Emotional balance mode",
  "잔치국수":"Calm comfort mode",
  "떡볶이":"Emotional release mode",
  "제육볶음":"Energy boost mode",
  "치킨":"Shared celebration mode",
  "삼겹살":"Social bonding mode",
  "비빔밥":"Balance control mode",
  "김밥":"Quick stability mode",
  "냉면":"Heat reset mode",
  "콩국수":"Quiet recovery mode",
  "비빔국수":"Stimulus relief mode",
  "회덮밥":"Vitality recharge mode",
  "라면":"Instant comfort mode"
};

const TAGLINE_EN = {
  "국밥": "Warm comfort to the core",
  "설렁탕": "A soft and gentle recovery bowl",
  "김치찌개": "Rich and spicy in one pot",
  "된장찌개": "Familiar home-style calm",
  "잔치국수": "Light and warm in one bowl",
  "떡볶이": "Sweet heat for a quick mood lift",
  "제육볶음": "Smoky spice for energy",
  "치킨": "Crispy and social by design",
  "삼겹살": "Grill, share, connect",
  "비빔밥": "A balanced customizable bowl",
  "김밥": "Fast, clean, and complete",
  "냉면": "Cold noodles that cool you down",
  "콩국수": "Nutty and mild summer comfort",
  "비빔국수": "Tangy spicy quick refresh",
  "회덮밥": "Fresh and lively mixed rice",
  "라면": "Fast comfort when needed most"
};

const CULTURE_TEXT_EN = {
  "국밥": "Gukbap reflects Korea's fast daily rhythm: refill energy quickly and return to routine.",
  "설렁탕": "Choosing mild warm broth for recovery is a familiar pattern in Korean home-style eating.",
  "김치찌개": "In Korea, spicy stew is often chosen as a practical way to reset mood and appetite.",
  "된장찌개": "Doenjang jjigae functions as a baseline home meal in many Korean households.",
  "잔치국수": "Noodle dishes like janchi guksu are a long-standing light-meal option in Korean dining.",
  "떡볶이": "Tteokbokki sits at the center of Korea's snack-food culture and quick social eating.",
  "제육볶음": "Spicy stir-fry with rice represents a classic Korean 'energy recharge' meal pattern.",
  "치킨": "Chicken is a social food icon in Korea, especially through the widely known chimaek culture.",
  "삼겹살": "Korean barbecue culture values shared table time as much as the food itself.",
  "비빔밥": "Bibimbap shows Korean meal efficiency: multiple side elements integrated into one bowl.",
  "김밥": "Gimbap became a practical default in urban Korea where portability and speed matter.",
  "냉면": "Naengmyeon is a core summer dish in Korea, used to cool down in hot weather.",
  "콩국수": "Kongguksu is recognized in Korea as a mild summer dish balancing nutrition and lightness.",
  "비빔국수": "Bibim guksu blends Korea's spicy preference with quick, low-burden noodle eating.",
  "회덮밥": "Hoe-deopbap combines seafood culture with Korea's practical mixed-bowl eating style.",
  "라면": "Ramyeon is a core convenience-food baseline in Korea for fast, low-friction meals."
};

const ALT_REASON_EN = {
  "국물 중심으로 편안하게 먹기 좋음": "Comfortable option centered on warm broth",
  "자극 적고 따뜻한 식사를 원할 때 적합": "Great when you want warm food with low stimulation",
  "스트레스 해소용 매운맛 선호에 맞음": "Matches a stress-relief spicy preference",
  "자극보다 안정감을 주는 메뉴": "Better for stability than stimulation",
  "부담 없는 따뜻한 메뉴를 찾을 때 좋음": "Works well for a light warm meal",
  "스트레스 해소에 잘 맞는 자극적인 선택": "A stimulating pick for mood release",
  "든든함과 자극을 동시에 원하는 취향에 적합": "Fits when you want both fullness and intensity",
  "여럿이 먹기 좋은 분위기형 메뉴": "A social mood-setting dish",
  "관계 중심 식사와 잘 맞는 메뉴": "Fits relationship-focused dining moments",
  "토핑 조절형 취향에 잘 맞는 메뉴": "Great for topping-control preferences",
  "시간이 없을 때 가장 안정적인 선택": "Most reliable when time is tight",
  "과열된 컨디션을 빠르게 리셋": "Quickly resets an overheated state",
  "자극 없이 가볍게 먹고 싶을 때 좋음": "Good when you want light food without strong stimulation",
  "가볍지만 자극 있는 메뉴를 원할 때 적합": "Fits when you want light but punchy flavor",
  "상쾌한 식감과 균형감을 동시에 만족": "Balances freshness and structure",
  "빠르고 확실한 만족감을 주는 메뉴": "Delivers fast and reliable satisfaction",
  "현재 취향과 유사한 선택": "Similar to your current preference"
};

const TIP_LABEL_EN = {
  "깍두기와 함께 먹기": "Pair with kkakdugi radish kimchi",
  "후추를 살짝 추가하기": "Add a touch of black pepper",
  "다진 청양고추로 칼칼함 더하기": "Add chopped chili for a sharper finish",
  "소면을 추가해 포만감 올리기": "Add thin noodles for extra fullness",
  "파를 넉넉히 넣기": "Use plenty of green onion",
  "소금은 먹기 직전에 조절": "Adjust salt right before eating",
  "참치나 돼지고기 추가": "Add tuna or pork for depth",
  "두부를 큼직하게 넣기": "Use larger tofu cubes",
  "마지막에 대파 올리기": "Top with scallion at the end",
  "애호박과 버섯을 추가": "Add zucchini and mushrooms",
  "청양고추로 끝맛 정리": "Finish with chili for a clean aftertaste",
  "두부는 마지막에 넣기": "Add tofu near the end",
  "김가루와 깨를 넉넉히": "Use seaweed flakes and sesame generously",
  "간장은 따로 곁들이기": "Serve soy sauce on the side",
  "고명을 다양하게 올리기": "Use mixed toppings for texture",
  "삶은 계란 추가": "Add a boiled egg",
  "치즈 토핑으로 밸런스": "Balance heat with a cheese topping",
  "단무지와 같이 먹기": "Pair with pickled radish",
  "쌈채소와 함께 먹기": "Pair with wrap vegetables",
  "마요네즈 살짝 곁들이기": "Add a little mayo as a side",
  "참기름 한 방울 추가": "Finish with a drop of sesame oil",
  "콜라/맥주와 페어링": "Pair with cola or beer",
  "양념 반 후라이드 반": "Try half seasoned, half fried",
  "치킨무로 느끼함 정리": "Clean the palate with pickled radish",
  "상추+쌈장+마늘 조합": "Try lettuce + ssamjang + garlic",
  "파채를 곁들이기": "Serve with sliced green onion",
  "김치 구워 함께 먹기": "Grill kimchi together",
  "고추장 양 조절": "Adjust gochujang to taste",
  "계란 프라이 올리기": "Top with a fried egg",
  "라면과 함께 먹기": "Pair with ramen",
  "와사비 마요 소스 곁들이기": "Serve with wasabi mayo",
  "단무지 추가하기": "Add pickled radish",
  "식초/겨자로 맛 조절": "Adjust flavor with vinegar or mustard",
  "삶은 계란 반쪽 추가": "Add half a boiled egg",
  "고기 고명과 함께 먹기": "Serve with sliced beef topping",
  "오이채로 식감 추가": "Add shredded cucumber for crunch",
  "소금/설탕 취향대로": "Season with salt or sugar as preferred",
  "깨를 갈아 뿌리기": "Sprinkle ground sesame",
  "삶은 계란으로 밸런스": "Balance with a boiled egg",
  "오이채 추가": "Add shredded cucumber",
  "참기름으로 향 더하기": "Add sesame oil for aroma",
  "초장 양 조절": "Adjust chojang level",
  "김가루를 추가": "Add seaweed flakes",
  "와사비를 소량 곁들이기": "Use a small amount of wasabi",
  "계란/파 추가": "Add egg and green onion",
  "치즈 한 장 올리기": "Top with a slice of cheese",
  "후추로 풍미 올리기": "Add pepper for depth",
  "기본 반찬과 함께 먹기": "Pair with basic side dishes",
  "원하는 토핑을 추가하기": "Add your preferred toppings",
  "따뜻할 때 바로 먹기": "Eat while hot"
};

const priority = [
  "국밥","냉면","떡볶이","삼겹살",
  "설렁탕","김치찌개","된장찌개",
  "치킨","제육볶음",
  "회덮밥","콩국수","비빔국수",
  "비빔밥","김밥","잔치국수",
  "라면"
];

const COLD_FOODS = new Set(["냉면", "콩국수", "비빔국수", "회덮밥"]);

const questions = [
  {
    id: "Q1",
    title: "Q1. 지금 당신의 상태는?",
    choices: {
      A: "지치고 방전됨",
      B: "편안하고 안정됨",
      C: "과열되고 예민함",
      D: "들뜨고 신남"
    }
  },
  {
    id: "Q2",
    title: "Q2. 지금 식사를 함께할 상황은?",
    choices: {
      A: "혼자",
      B: "소수와",
      C: "여럿과",
      D: "축하 자리"
    }
  },
  {
    id: "Q3",
    title: "Q3. 식사에 쓸 수 있는 시간은?",
    choices: {
      A: "거의 없음",
      B: "빨리 먹고 싶음",
      C: "여유 있음",
      D: "오래 앉아도 좋음"
    }
  },
  {
    id: "Q4",
    title: "Q4. 지금 식사에서 가장 끌리는 감각은?",
    choices: {
      A: "뜨겁고 따뜻함",
      B: "매콤하고 매움",
      C: "가볍고 편한",
      D: "강하게 자극",
      E: "시원하고 차가움"
    }
  },
  {
    id: "Q5",
    title: "Q5. 나는 요리가",
    choices: {
      A: "완전히 완성되어 나오는 게 좋음",
      B: "내가 토핑/내용물을 조절할 수 있는 게 좋음",
      C: "함께 굽고 만들면서 먹는 게 좋음"
    }
  },
  {
    id: "Q6",
    title: "Q6. 지금 식사에 가장 바라는 건?",
    choices: {
      A: "몸 회복",
      B: "스트레스 해소/기분전환",
      C: "배 채움/든든함",
      D: "관계/시간"
    }
  }
];

const QUESTIONS_EN = {
  Q1: {
    title: "Q1. What's your current state?",
    choices: { A: "Tired and drained", B: "Calm and stable", C: "Overheated and sensitive", D: "Excited and energetic" }
  },
  Q2: {
    title: "Q2. Who are you eating with?",
    choices: { A: "Alone", B: "With a few people", C: "With a group", D: "Celebration" }
  },
  Q3: {
    title: "Q3. How much time do you have?",
    choices: { A: "Almost none", B: "Want to eat quickly", C: "Have enough time", D: "Can sit for a while" }
  },
  Q4: {
    title: "Q4. Which texture/temperature do you want now?",
    choices: { A: "Hot and warm", B: "Spicy and hot", C: "Light and easy", D: "Strong stimulation", E: "Cool and cold" }
  },
  Q5: {
    title: "Q5. For cooking, I prefer...",
    choices: { A: "Fully prepared dishes", B: "I can customize toppings/contents", C: "Cook together while eating" }
  },
  Q6: {
    title: "Q6. What do you want most from this meal?",
    choices: { A: "Physical recovery", B: "Stress relief / mood change", C: "Fullness", D: "Connection / time" }
  }
};

const FOOD_META = {
  "국밥": {
    en: "Gukbap",
    tagline: "추운 날 속까지 따끈하게",
    coreLineKo: "언제 어디서나 든든하게.",
    coreLineEn: "Always there. Always enough.",
    subLineKo: "그래서 설명이 필요 없다.",
    subLineEn: "Koreans choose gukbap when they don't want to think.",
    descriptionEn: "It's hot, complete, and reliable. Not comfort food - survival food.",
    descriptionKo: "국밥은 한 끼의 기본 구성을 이미 갖춘 음식이다. 뜨겁고, 든든하고, 실패하지 않는다. 그래서 언제든 선택된다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "국밥은 빠르게 에너지를 채우고 다시 일상으로 복귀하려는 한국식 리듬과 맞닿아 있다.",
    chips: ["따끈한 국물", "든든한 한 끼"],
    tips: ["깍두기와 함께 먹기", "후추를 살짝 추가하기", "다진 청양고추로 칼칼함 더하기"],
    recipe: ["시판 사골국을 데운다", "밥과 파를 넣고 한소끔 끓인다", "소금/후추로 간을 맞춘다"],
    altReason: "국물 중심으로 편안하게 먹기 좋음"
  },
  "설렁탕": {
    en: "Seolleongtang",
    tagline: "부담 적은 부드러운 회복식",
    coreLineKo: "속을 조용히 회복시키는 한 그릇.",
    coreLineEn: "A calm bowl for full recovery.",
    subLineKo: "그래서 자극 없이 끝까지 편안하다.",
    subLineEn: "Soft flavor, steady energy, no overload.",
    descriptionEn: "Seolleongtang is mild, warm, and easy to finish. It is a reset meal for tired days.",
    descriptionKo: "설렁탕은 자극보다 안정에 집중한 국물식이다. 부담이 적어서 컨디션이 떨어진 날에 특히 잘 맞는다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "속이 약할 때 따뜻하고 순한 국물을 찾는 습관은 한국의 회복식 문화와 연결된다.",
    chips: ["순한 맛", "회복식"],
    tips: ["소면을 추가해 포만감 올리기", "파를 넉넉히 넣기", "소금은 먹기 직전에 조절"],
    recipe: ["사골 육수를 데운다", "얇은 소고기와 파를 넣는다", "소금으로 심심하게 간한다"],
    altReason: "자극 적고 따뜻한 식사를 원할 때 적합"
  },
  "김치찌개": {
    en: "Kimchi Jjigae",
    tagline: "매콤하고 진한 한 끼",
    coreLineKo: "칼칼함으로 기분을 다시 세운다.",
    coreLineEn: "Spice that resets your mood.",
    subLineKo: "그래서 피곤한 날에도 식욕이 돌아온다.",
    subLineEn: "Deep broth, fast appetite recovery.",
    descriptionEn: "Kimchi jjigae delivers strong umami and heat in one bowl. It wakes up both mood and appetite.",
    descriptionKo: "김치찌개는 강한 감칠맛과 매콤함으로 식사 몰입도를 빠르게 끌어올린다. 해소감이 필요한 날에 선택된다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "한국에서는 스트레스를 강한 국물 맛으로 푸는 식사 선택이 흔하며, 김치찌개가 대표적이다.",
    chips: ["칼칼함", "국물 요리"],
    tips: ["참치나 돼지고기 추가", "두부를 큼직하게 넣기", "마지막에 대파 올리기"],
    recipe: ["김치와 양파를 볶는다", "물과 고기(또는 참치)를 넣고 끓인다", "두부를 넣고 5분 더 끓인다"],
    altReason: "스트레스 해소용 매운맛 선호에 맞음"
  },
  "된장찌개": {
    en: "Doenjang Jjigae",
    tagline: "편안하고 익숙한 집밥의 맛",
    coreLineKo: "익숙함이 주는 안정감.",
    coreLineEn: "Familiar flavor, stable mood.",
    subLineKo: "그래서 매일 먹어도 질리지 않는다.",
    subLineEn: "Simple, savory, and consistently comforting.",
    descriptionEn: "Doenjang jjigae is earthy and balanced. It feels like a dependable everyday base meal.",
    descriptionKo: "된장찌개는 화려하지 않지만 꾸준히 만족을 주는 메뉴다. 일상적인 안정감을 원하는 순간에 잘 맞는다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "집밥의 기준으로 된장찌개를 떠올리는 인식은 한국 가정식 문화의 중심축이다.",
    chips: ["구수함", "안정감"],
    tips: ["애호박과 버섯을 추가", "청양고추로 끝맛 정리", "두부는 마지막에 넣기"],
    recipe: ["멸치육수에 된장을 푼다", "채소와 두부를 넣고 끓인다", "다진 마늘로 향을 마무리한다"],
    altReason: "자극보다 안정감을 주는 메뉴"
  },
  "잔치국수": {
    en: "Janchi Guksu",
    tagline: "가볍고 따뜻하게 한 그릇",
    coreLineKo: "가볍게, 하지만 허전하지 않게.",
    coreLineEn: "Light, but never empty.",
    subLineKo: "그래서 짧은 식사 시간에도 균형이 맞는다.",
    subLineEn: "Quick to eat, easy to digest.",
    descriptionEn: "Janchi guksu is warm and gentle with a clean finish. It fits when you need a quick but calm meal.",
    descriptionKo: "잔치국수는 부담 없이 넘어가면서도 한 끼의 구조를 지켜준다. 짧은 식사 시간에 특히 효율적이다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "국수는 한국에서 가볍게 식사를 마무리하는 선택지로 오래 사랑받아 온 메뉴군이다.",
    chips: ["가벼움", "빠른 식사"],
    tips: ["김가루와 깨를 넉넉히", "간장은 따로 곁들이기", "고명을 다양하게 올리기"],
    recipe: ["국수 면을 삶아 찬물에 헹군다", "멸치육수를 데운다", "면과 고명을 올려 완성한다"],
    altReason: "부담 없는 따뜻한 메뉴를 찾을 때 좋음"
  },
  "떡볶이": {
    en: "Tteokbokki",
    tagline: "매콤달콤하게 기분 전환",
    coreLineKo: "강한 맛으로 텐션을 끌어올린다.",
    coreLineEn: "Bold heat, instant mood lift.",
    subLineKo: "그래서 심심한 날에 가장 빠른 해답이다.",
    subLineEn: "Sweet, spicy, and emotionally loud.",
    descriptionEn: "Tteokbokki is a high-impact flavor pick. It turns a dull moment into a vivid one quickly.",
    descriptionKo: "떡볶이는 자극적인 양념으로 분위기를 단번에 바꾸는 메뉴다. 기분 전환이 필요할 때 반응이 빠르다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "분식 문화는 한국의 빠른 일상과 잘 맞으며, 떡볶이는 그 중심에서 감정 환기를 담당한다.",
    chips: ["강한 자극", "기분 전환"],
    tips: ["삶은 계란 추가", "치즈 토핑으로 밸런스", "단무지와 같이 먹기"],
    recipe: ["고추장 양념을 물에 풀어 끓인다", "떡과 어묵을 넣고 조린다", "대파와 계란으로 마무리한다"],
    altReason: "스트레스 해소에 잘 맞는 자극적인 선택"
  },
  "제육볶음": {
    en: "Jeyuk Bokkeum",
    tagline: "불향과 매콤함으로 에너지 충전",
    coreLineKo: "밥 한 공기를 전제로 한 매운 추진력.",
    coreLineEn: "Spicy fuel built for rice.",
    subLineKo: "그래서 한 끼 후 체감 에너지가 확실하다.",
    subLineEn: "Fire aroma, strong bite, clear momentum.",
    descriptionEn: "Jeyuk bokkeum combines heat, sweetness, and smoky notes. It is for people who want a punchy meal.",
    descriptionKo: "제육볶음은 강한 간과 불향으로 식사의 속도를 끌어올린다. 든든함과 자극을 동시에 원하는 상황에 적합하다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "매운 볶음요리를 밥과 함께 먹는 방식은 한국식 한 끼 구성의 전형적인 에너지 충전 패턴이다.",
    chips: ["단짠매콤", "밥도둑"],
    tips: ["쌈채소와 함께 먹기", "마요네즈 살짝 곁들이기", "참기름 한 방울 추가"],
    recipe: ["돼지고기에 양념을 버무린다", "양파와 함께 센 불에 볶는다", "대파를 넣고 빠르게 마무리한다"],
    altReason: "든든함과 자극을 동시에 원하는 취향에 적합"
  },
  "치킨": {
    en: "Chicken",
    tagline: "가볍게 즐기기 좋은 공유 메뉴",
    coreLineKo: "분위기를 만드는 가장 쉬운 선택.",
    coreLineEn: "The easiest way to set the mood.",
    subLineKo: "그래서 혼자보다 함께일 때 더 강하다.",
    subLineEn: "Crispy texture, shared table, instant vibe.",
    descriptionEn: "Korean fried chicken works as a social food. It is less about hunger and more about shared momentum.",
    descriptionKo: "치킨은 배를 채우는 기능을 넘어 분위기를 만드는 메뉴다. 함께 먹는 자리에서 만족도가 크게 올라간다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "치맥 문화처럼 한국에서는 치킨이 관계 중심 식사의 상징으로 자주 쓰인다.",
    chips: ["공유 메뉴", "바삭함"],
    tips: ["콜라/맥주와 페어링", "양념 반 후라이드 반", "치킨무로 느끼함 정리"],
    recipe: ["순살 치킨을 준비한다", "오븐 또는 에어프라이어로 데운다", "소스를 곁들여 완성한다"],
    altReason: "여럿이 먹기 좋은 분위기형 메뉴"
  },
  "삼겹살": {
    en: "Samgyeopsal",
    tagline: "함께 구워 먹는 즐거움",
    coreLineKo: "굽는 시간이 곧 대화 시간이 된다.",
    coreLineEn: "Grill time becomes talk time.",
    subLineKo: "그래서 식사와 관계가 동시에 진행된다.",
    subLineEn: "Interactive meal, slower pace, stronger bonding.",
    descriptionEn: "Samgyeopsal is an interactive dining format. Cooking and eating happen together at the table.",
    descriptionKo: "삼겹살은 조리와 식사가 분리되지 않는 메뉴다. 함께 굽고 나누는 과정 자체가 식사의 핵심이 된다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "전통적으로는 테이블에서 한 사람이 굽기를 맡고 과거엔 막내가 담당하는 관습도 있었지만, 요즘은 함께 번갈아 굽는 흐름이 늘고 있다.",
    chips: ["함께 먹기", "직접 조리"],
    tips: ["상추+쌈장+마늘 조합", "파채를 곁들이기", "김치 구워 함께 먹기"],
    recipe: ["팬을 달군 뒤 고기를 굽는다", "기름을 정리하며 노릇하게 익힌다", "쌈채소와 함께 먹는다"],
    altReason: "관계 중심 식사와 잘 맞는 메뉴"
  },
  "비빔밥": {
    en: "Bibimbap",
    tagline: "균형 있게 채우는 한 그릇",
    coreLineKo: "원하는 밸런스를 직접 완성한다.",
    coreLineEn: "You build your own balance.",
    subLineKo: "그래서 취향과 영양을 동시에 잡기 쉽다.",
    subLineEn: "Customizable, colorful, and nutritionally steady.",
    descriptionEn: "Bibimbap lets you control texture and seasoning in one bowl. It is practical and balanced.",
    descriptionKo: "비빔밥은 재료와 양념 비율을 직접 조절할 수 있어 취향 대응력이 높다. 균형식이 필요할 때 안정적이다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "여러 반찬을 한 그릇에 통합해 먹는 방식은 한국 식문화의 효율성과 균형 감각을 보여준다.",
    chips: ["균형식", "커스터마이즈"],
    tips: ["고추장 양 조절", "계란 프라이 올리기", "참기름 한 방울 추가"],
    recipe: ["밥 위에 나물/단백질을 올린다", "고추장과 참기름을 넣는다", "먹기 직전 잘 비빈다"],
    altReason: "토핑 조절형 취향에 잘 맞는 메뉴"
  },
  "김밥": {
    en: "Gimbap",
    tagline: "빠르고 깔끔한 한 끼",
    coreLineKo: "이동 중에도 식사 품질을 지킨다.",
    coreLineEn: "Portable, clean, and complete.",
    subLineKo: "그래서 시간이 없을수록 더 강한 메뉴다.",
    subLineEn: "Fast hand meal with reliable structure.",
    descriptionEn: "Gimbap is compact, convenient, and consistent. It is one of the most efficient Korean meal formats.",
    descriptionKo: "김밥은 준비와 섭취가 모두 빠른 고효율 식사다. 바쁜 일정에서도 한 끼의 완성도를 유지해 준다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "포장과 이동이 잦은 한국 도시 생활에서 김밥은 대표적인 실전형 식사로 자리 잡았다.",
    chips: ["간편식", "혼밥 친화"],
    tips: ["라면과 함께 먹기", "와사비 마요 소스 곁들이기", "단무지 추가하기"],
    recipe: ["김 위에 밥을 얇게 편다", "재료를 올리고 단단히 만다", "한입 크기로 썰어 완성한다"],
    altReason: "시간이 없을 때 가장 안정적인 선택"
  },
  "냉면": {
    en: "Naengmyeon",
    tagline: "열을 식혀주는 시원한 한 그릇",
    coreLineKo: "과열된 컨디션을 즉시 냉각한다.",
    coreLineEn: "Instant cooldown in one bowl.",
    subLineKo: "그래서 더운 날엔 설명보다 체감이 먼저 온다.",
    subLineEn: "Cold broth, firm noodles, sharp refresh.",
    descriptionEn: "Naengmyeon is built to cool body heat quickly. It is refreshing, clean, and highly seasonal.",
    descriptionKo: "냉면은 온도감으로 만족을 만드는 메뉴다. 입맛을 리셋하고 식사 후 피로감을 낮추는 데 유리하다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "여름철 한국 식문화에서 냉면은 더위를 해소하는 대표적인 계절 메뉴로 기능한다.",
    chips: ["시원함", "리프레시"],
    tips: ["식초/겨자로 맛 조절", "삶은 계란 반쪽 추가", "고기 고명과 함께 먹기"],
    recipe: ["면을 삶아 차갑게 헹군다", "차가운 육수에 면을 담는다", "오이/계란/고명을 올린다"],
    altReason: "과열된 컨디션을 빠르게 리셋"
  },
  "콩국수": {
    en: "Kongguksu",
    tagline: "담백하고 고소한 여름식",
    coreLineKo: "자극 없이 부드럽게 회복한다.",
    coreLineEn: "Quiet flavor, smooth recovery.",
    subLineKo: "그래서 덜 자극적인 시원함이 필요할 때 맞다.",
    subLineEn: "Nutty, cool, and calmly filling.",
    descriptionEn: "Kongguksu offers a mild, protein-rich cold meal. It is a gentle choice for hot days.",
    descriptionKo: "콩국수는 강한 양념 없이도 포만감과 고소함을 주는 메뉴다. 편안한 냉식이 필요할 때 적합하다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "여름 보양식 맥락에서 콩국수는 담백함과 영양을 함께 챙기는 한국식 선택으로 인식된다.",
    chips: ["담백함", "시원한 면"],
    tips: ["오이채로 식감 추가", "소금/설탕 취향대로", "깨를 갈아 뿌리기"],
    recipe: ["면을 삶아 차갑게 헹군다", "콩국을 차갑게 준비한다", "면 위에 콩국을 붓고 고명 올린다"],
    altReason: "자극 없이 가볍게 먹고 싶을 때 좋음"
  },
  "비빔국수": {
    en: "Bibim Guksu",
    tagline: "새콤매콤 산뜻한 자극",
    coreLineKo: "시원함 위에 매운 킥을 더한다.",
    coreLineEn: "Cool base, spicy kick.",
    subLineKo: "그래서 가볍지만 심심하지 않다.",
    subLineEn: "Tangy heat with fast satisfaction.",
    descriptionEn: "Bibim guksu is bright, spicy, and quick. It balances refreshment with stimulation.",
    descriptionKo: "비빔국수는 산미와 매운맛이 동시에 살아 있어 식사 텐션을 빠르게 올린다. 가볍지만 임팩트가 있다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "국수에 양념 강도를 높여 먹는 방식은 한국의 매운맛 선호와 간편식 문화가 만나는 지점이다.",
    chips: ["새콤매콤", "빠른 만족"],
    tips: ["삶은 계란으로 밸런스", "오이채 추가", "참기름으로 향 더하기"],
    recipe: ["면을 삶아 찬물에 헹군다", "양념장과 면을 비빈다", "오이/계란 고명을 올린다"],
    altReason: "가볍지만 자극 있는 메뉴를 원할 때 적합"
  },
  "회덮밥": {
    en: "Hoe-deopbap",
    tagline: "신선하고 산뜻한 활력 한 끼",
    coreLineKo: "신선함으로 집중력을 다시 세운다.",
    coreLineEn: "Freshness that restores focus.",
    subLineKo: "그래서 무겁지 않게 에너지를 채울 수 있다.",
    subLineEn: "Raw fish, crisp veggies, clean energy.",
    descriptionEn: "Hoe-deopbap combines chilled fish, vegetables, and sauce in a balanced bowl. It feels lively but not heavy.",
    descriptionKo: "회덮밥은 신선한 식감과 조절 가능한 양념이 강점이다. 가볍게 먹고 싶지만 에너지는 확보하고 싶을 때 잘 맞는다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "회덮밥은 해산물 소비 문화와 비빔밥식 한 끼 구성이 결합된, 한국식 실용 메뉴로 볼 수 있다.",
    chips: ["산뜻함", "조절형 식사"],
    tips: ["초장 양 조절", "김가루를 추가", "와사비를 소량 곁들이기"],
    recipe: ["밥 위에 채소와 회를 올린다", "초장과 참기름을 넣는다", "가볍게 비벼 먹는다"],
    altReason: "상쾌한 식감과 균형감을 동시에 만족"
  },
  "라면": {
    en: "Ramyeon",
    tagline: "즉각적인 위로가 필요할 때",
    coreLineKo: "가장 빠른 만족, 가장 짧은 준비.",
    coreLineEn: "Fastest comfort, shortest prep.",
    subLineKo: "그래서 멈출 시간이 없을 때 선택된다.",
    subLineEn: "Hot, salty, immediate relief.",
    descriptionEn: "Ramen is a speed-first meal with strong flavor impact. It is practical when time and focus are limited.",
    descriptionKo: "라면은 조리 난도가 낮고 만족 도달 속도가 빠르다. 급하게 허기와 피로를 처리해야 하는 상황에 자주 선택된다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "한국에서는 라면이 간편식의 기본값으로 작동하며, 바쁜 일정 속 즉시 대응식으로 널리 소비된다.",
    chips: ["즉시 만족", "초간편"],
    tips: ["계란/파 추가", "치즈 한 장 올리기", "후추로 풍미 올리기"],
    recipe: ["물과 스프를 끓인다", "면을 넣고 3~4분 끓인다", "계란과 파를 넣고 마무리한다"],
    altReason: "빠르고 확실한 만족감을 주는 메뉴"
  }
};

const FOOD_PALETTE = {
  "국밥": ["#bbf7d0", "#16a34a"],
  "설렁탕": ["#e2e8f0", "#64748b"],
  "김치찌개": ["#fecaca", "#dc2626"],
  "된장찌개": ["#fde68a", "#b45309"],
  "잔치국수": ["#d9f99d", "#65a30d"],
  "떡볶이": ["#fca5a5", "#be123c"],
  "제육볶음": ["#fdba74", "#c2410c"],
  "치킨": ["#fde68a", "#ca8a04"],
  "삼겹살": ["#fecdd3", "#9f1239"],
  "비빔밥": ["#c4b5fd", "#6d28d9"],
  "김밥": ["#86efac", "#15803d"],
  "냉면": ["#bae6fd", "#0284c7"],
  "콩국수": ["#ddd6fe", "#7c3aed"],
  "비빔국수": ["#fda4af", "#e11d48"],
  "회덮밥": ["#a5f3fc", "#0e7490"],
  "라면": ["#fdba74", "#ea580c"]
};

const FOOD_IMAGE_PATH = {
  "국밥": "./images/gukbap.png",
  "설렁탕": "./images/seolleongtang.png",
  "김치찌개": "./images/kimchi-jjigae.png",
  "된장찌개": "./images/doenjang-jjigae.png",
  "잔치국수": "./images/janchi-guksu.png",
  "떡볶이": "./images/tteokbokki.png",
  "제육볶음": "./images/jeyuk-bokkeum.png",
  "치킨": "./images/chicken.png",
  "삼겹살": "./images/samgyeopsal.png",
  "비빔밥": "./images/bibimbap.png",
  "김밥": "./images/gimbap.png",
  "냉면": "./images/naengmyeon.png",
  "콩국수": "./images/kongguksu.png",
  "비빔국수": "./images/bibim-guksu.png",
  "회덮밥": "./images/hoe-deopbap.png",
  "라면": "./images/ramyeon.png"
};

function buildFoodImageDataUrl(food, en, tagline) {
  const palette = FOOD_PALETTE[food] ?? ["#bfdbfe", "#1d4ed8"];
  const [start, end] = palette;
  const safeFood = String(food).replace(/[<>&"]/g, "");
  const safeEn = String(en || "K-Food").replace(/[<>&"]/g, "");
  const safeTag = String(tagline || "Recommended Menu").replace(/[<>&"]/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="${start}"/>
    <stop offset="100%" stop-color="${end}"/>
  </linearGradient>
</defs>
<rect width="1200" height="800" fill="url(#g)"/>
<circle cx="1030" cy="140" r="120" fill="rgba(255,255,255,0.22)"/>
<circle cx="170" cy="650" r="180" fill="rgba(255,255,255,0.18)"/>
<rect x="80" y="130" width="1040" height="540" rx="28" fill="rgba(15,23,42,0.33)"/>
<text x="130" y="270" fill="#ffffff" font-size="80" font-family="Arial, sans-serif" font-weight="700">${safeFood}</text>
<text x="130" y="340" fill="rgba(255,255,255,0.94)" font-size="42" font-family="Arial, sans-serif">${safeEn}</text>
<text x="130" y="430" fill="rgba(255,255,255,0.96)" font-size="36" font-family="Arial, sans-serif">${safeTag}</text>
</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else node.setAttribute(k, v);
  }
  for (const child of children) {
    node.append(child);
  }
  return node;
}

function adSlot(slotId, lang = "ko") {
  const isKo = lang !== "en";
  return el("div", { class: "card ad-slot", "data-ad-slot": slotId }, [
    el("div", {}, [
      el("div", { class: "ad-label" }, [isKo ? "안내" : "Note"]),
      el("div", { class: "ad-copy" }, [
        isKo
          ? "광고는 페이지 흐름을 해치지 않는 위치에서 자동으로 노출될 수 있습니다."
          : "Ads may be shown automatically in non-disruptive positions."
      ])
    ])
  ]);
}

function computeScores(answers) {
  const scores = {};
  SCORING.foods.forEach(f => scores[f] = 0);

  answers.forEach((choiceKey, idx) => {
    const qId = `Q${idx + 1}`;
    const delta = SCORING[qId]?.[choiceKey];
    if (!delta) return;

    Object.entries(delta).forEach(([food, pts]) => {
      scores[food] = (scores[food] ?? 0) + pts;
    });
  });

  const q4Choice = answers?.[3];

  // "가볍고 편한"을 고르면 조리 부담이 큰 삼겹살은 치킨보다 낮게 강제한다.
  if (q4Choice === "C" && (scores["삼겹살"] ?? 0) >= (scores["치킨"] ?? 0)) {
    scores["삼겹살"] = (scores["치킨"] ?? 0) - 1;
  }

  let ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  if (q4Choice === "E") {
    ranked = ranked.filter(([food]) => COLD_FOODS.has(food));
  }

  const maxScore = ranked[0][1];
  const winners = ranked.filter(([, s]) => s === maxScore);

  winners.sort((a, b) => priority.indexOf(a[0]) - priority.indexOf(b[0]));
  return { scores, ranked, winners };
}

function foodMeta(food) {
  const base = FOOD_META[food] ?? {
    en: "Korean Food",
    tagline: "지금 상태에 맞춘 추천 메뉴",
    coreLineKo: "지금 상태에 맞는 한 끼.",
    coreLineEn: "Your best match right now.",
    subLineKo: "그래서 지금 이 선택이 가장 빠르고 정확하다.",
    subLineEn: "A reliable pick for this exact moment.",
    descriptionEn: "Balanced flavor, easy pacing, and a familiar format.",
    descriptionKo: "지금의 컨디션과 식사 맥락을 함께 반영한, 실패 확률이 낮은 선택이다.",
    cultureTitle: "한국 문화 포인트",
    cultureText: "한국 식문화는 상황에 맞는 속도와 균형을 중시하며, 이 메뉴도 그 흐름에 잘 맞는다.",
    chips: ["한식", "추천 메뉴"],
    tips: ["기본 반찬과 함께 먹기", "원하는 토핑을 추가하기", "따뜻할 때 바로 먹기"],
    recipe: ["재료를 준비한다", "기본 조리 후 간을 맞춘다", "취향에 맞게 곁들여 먹는다"],
    altReason: "현재 취향과 유사한 선택"
  };
  const normalized = {
    ...base,
    taglineEn: base.taglineEn ?? TAGLINE_EN[food] ?? `${base.en} matched to your current state.`,
    coreLineKo: base.coreLineKo ?? `${food}이(가) 지금 가장 잘 맞아요.`,
    coreLineEn: base.coreLineEn ?? `${base.en} fits your current state.`,
    subLineKo: base.subLineKo ?? `그래서 ${food}이(가) 가장 안정적인 선택입니다.`,
    subLineEn: base.subLineEn ?? "Reliable, straightforward, and satisfying.",
    descriptionEn: base.descriptionEn ?? `${base.en} gives a complete and dependable meal flow.`,
    descriptionKo: base.descriptionKo ?? `${food}은/는 지금 컨디션에서 부담이 적고 만족도가 높은 식사입니다.`,
    cultureTitle: base.cultureTitle ?? "한국 문화 포인트",
    cultureText: base.cultureText ?? `${food}은/는 한국에서 상황 중심으로 메뉴를 고르는 습관과 잘 맞습니다.`,
    cultureTextEn: base.cultureTextEn ?? CULTURE_TEXT_EN[food] ?? `${base.en} reflects a Korean context-first meal choice: practical, balanced, and situation-aware.`,
    altReasonEn: base.altReasonEn ?? ALT_REASON_EN[base.altReason] ?? "A close fit for your current preference pattern.",
    tipsEn: base.tipsEn ?? (base.tips ?? []).map((tip) => TIP_LABEL_EN[tip] ?? "Adjust seasoning and toppings to your preference.")
  };
  return {
    ...normalized,
    image: FOOD_IMAGE_PATH[food] ?? buildFoodImageDataUrl(food, normalized.en, normalized.tagline)
  };
}

const CHIP_LABEL_EN = {
  "국물 선호": "Broth Preference",
  "따끈한 메뉴": "Warm Dish",
  "칼칼한 맛": "Spicy Broth",
  "가벼운 한 끼": "Light Meal",
  "강한 자극": "Strong Kick",
  "매운맛": "Spicy Flavor",
  "시원한 메뉴": "Cold Dish",
  "리프레시": "Refreshing",
  "혼밥": "Solo Meal",
  "소수 식사": "Small Group",
  "함께 먹기": "Shared Meal",
  "조리 개입 낮음": "Low Prep",
  "토핑/소스 조절": "Topping Control",
  "균형식 지향": "Balanced Meal",
  "함께 조리": "Cook Together",
  "몸 회복": "Recovery",
  "기분 전환": "Mood Reset",
  "든든함": "Hearty",
  "관계 중심": "Social Focus",
  "시원함": "Cool",
  "담백함": "Mild",
  "시원한 면": "Cold Noodles",
  "새콤매콤": "Tangy & Spicy",
  "빠른 만족": "Quick Satisfaction",
  "산뜻함": "Fresh",
  "조절형 식사": "Adjustable",
  "따끈한 국물": "Hot Broth",
  "든든한 한 끼": "Filling Meal",
  "한식": "Korean Food",
  "추천 메뉴": "Recommended"
  ,
  "순한 맛": "Mild Flavor",
  "회복식": "Recovery Meal",
  "칼칼함": "Sharp Spiciness",
  "국물 요리": "Broth Dish",
  "구수함": "Savory Depth",
  "안정감": "Stability",
  "가벼움": "Lightness",
  "빠른 식사": "Quick Meal",
  "기분 전환": "Mood Refresh",
  "단짠매콤": "Sweet-Salty-Spicy",
  "밥도둑": "Rice Booster",
  "공유 메뉴": "Shareable",
  "바삭함": "Crispy",
  "직접 조리": "Interactive Cooking",
  "균형식": "Balanced Diet",
  "커스터마이즈": "Customizable",
  "간편식": "Convenience Meal",
  "혼밥 친화": "Solo-Friendly",
  "즉시 만족": "Instant Satisfaction",
  "초간편": "Ultra Quick"
};

function deriveReasonContent(answers, topFood, lang = "ko") {
  const isKo = lang !== "en";
  const chips = [];
  const reasons = [];
  const t = (ko, en) => isKo ? ko : en;
  const pushChip = (ko, en = null) => {
    const text = isKo ? ko : (en ?? CHIP_LABEL_EN[ko] ?? ko);
    if (text && !chips.includes(text) && chips.length < 6) chips.push(text);
  };

  const q2 = answers[1];
  const q4 = answers[3];
  const q5 = answers[4];
  const q6 = answers[5];

  if (q4 === "A") {
    pushChip("따끈한 국물");
    pushChip("따끈한 메뉴");
    reasons.push(t(
      "뜨겁고 따뜻한 감각을 선호해 온도가 주는 만족감을 우선 반영했어요.",
      "You preferred a hot and warm profile, so dishes with heat-forward comfort were weighted higher."
    ));
  }
  if (q4 === "B") {
    pushChip("칼칼한 맛");
    pushChip("매운맛");
    reasons.push(t(
      "매콤하고 매운 감각을 골라 자극적인 만족감이 있는 메뉴를 가산했어요.",
      "You chose a spicy profile, so dishes with stronger heat and kick were boosted."
    ));
  }
  if (q4 === "C") {
    pushChip("가벼운 한 끼");
    reasons.push(t(
      "가볍고 편한 식감을 원해서 부담이 낮은 구성을 우선했어요.",
      "You wanted a lighter texture, so low-burden options were prioritized."
    ));
  }
  if (q4 === "D") {
    pushChip("강한 자극");
    pushChip("매운맛");
    reasons.push(t(
      "강한 자극을 선호해 한 입에 임팩트가 있는 메뉴를 우선으로 반영했어요.",
      "You preferred a strong kick, so high-impact flavors were prioritized."
    ));
  }
  if (q4 === "E") {
    pushChip("시원한 메뉴");
    pushChip("리프레시");
    reasons.push(t(
      "시원하고 차가운 감각을 선택해 열감을 낮추는 메뉴에 점수를 높였어요.",
      "You selected a cold profile, so cooling dishes received higher scores."
    ));
  }

  if (q2 === "A") {
    pushChip("혼밥");
    reasons.push(t(
      "혼자 먹는 상황이라 준비와 식사가 간편한 방향을 강화했어요.",
      "Since this is a solo meal, quick-prep and easy-eat options were emphasized."
    ));
  }
  if (q2 === "B") pushChip("소수 식사");
  if (q2 === "C" || q2 === "D") {
    pushChip("함께 먹기");
    reasons.push(t(
      "여럿이 함께하는 상황을 반영해 공유하기 좋은 메뉴를 가산했어요.",
      "Group dining context was reflected, so share-friendly dishes were boosted."
    ));
  }

  if (q5 === "A") pushChip("조리 개입 낮음");
  if (q5 === "B") pushChip("토핑/소스 조절");
  if (q5 === "C") pushChip("함께 조리");

  if (q6 === "A") pushChip("몸 회복");
  if (q6 === "B") pushChip("기분 전환");
  if (q6 === "C") pushChip("든든함");
  if (q6 === "D") pushChip("관계 중심");

  const meta = foodMeta(topFood);
  meta.chips.forEach((chip) => pushChip(chip));

  const summary = reasons.slice(0, 3);
  if (summary.length < 2) {
    summary.push(t(
      "선택한 답변의 공통점과 메뉴 특성을 함께 반영해 가장 점수가 높은 결과를 제시했어요.",
      "We combined your answer pattern with dish traits to produce the top-scoring match."
    ));
  }
  if (summary.length < 3) {
    summary.push(t(
      `최종 추천은 ${topFood}(${meta.en})이며, 현재 상태인 ${stateMap[topFood] ?? "추천 상태"}와도 잘 맞아요.`,
      `Top match is ${topFood} (${meta.en}), aligned with your current preference profile.`
    ));
  }

  return { chips: chips.slice(0, 6), summary: summary.slice(0, 3) };
}

function interactionGuideContent(q5Choice, food, lang = "ko") {
  const isKo = lang !== "en";
  if (q5Choice === "B") {
    const byFoodKo = {
      "라면": [
        "처음엔 기본 조리(물 550ml 기준)로 끓이고, 마지막 1분에 계란/대파를 넣어 농도와 향을 맞추세요.",
        "스프는 한 번에 다 넣지 말고 70~80%부터 시작해 짠맛을 조절하세요.",
        "치즈를 넣을 땐 불을 줄인 뒤 넣어 국물 농도와 염도를 함께 확인하는 방식이 안정적입니다."
      ],
      "비빔밥": [
        "고추장은 처음부터 많이 넣지 말고 반 숟가락 단위로 나눠 넣으세요.",
        "참기름은 마지막에 소량 넣어 향만 살리면 재료 본맛을 유지하기 쉽습니다.",
        "나물·단백질 비율을 먼저 맞춘 뒤 비비면 식감 밸런스가 좋아집니다."
      ],
      "비빔국수": [
        "양념장은 70%만 먼저 넣어 비빈 뒤, 부족한 맛을 식초/설탕/고추장으로 보정하세요.",
        "면은 찬물에 충분히 헹궈 전분을 빼야 양념이 깔끔하게 붙습니다.",
        "참기름과 깨는 마지막에 넣어 향의 과다를 막고 산미를 살리세요."
      ],
      "회덮밥": [
        "초고추장은 절반부터 넣고 채소 수분량에 따라 추가하세요.",
        "회 식감을 살리려면 밥·채소를 먼저 가볍게 섞고 회는 마지막에 합치세요.",
        "와사비는 아주 소량씩 분할해 넣어 매운 향이 과해지지 않게 조절하세요."
      ],
      "떡볶이": [
        "기본 양념으로 먼저 끓인 뒤 치즈·계란·사리를 단계적으로 넣어 농도 변화를 확인하세요.",
        "단맛이 강하면 물/고춧가루로, 매운맛이 강하면 설탕/치즈로 균형을 맞추세요.",
        "추가 토핑이 많을수록 간이 옅어지니 마지막에 소스 농도를 다시 점검하세요."
      ],
      "국밥": [
        "소금·후추·대파는 한 번에 많이 넣지 말고 2~3회 나눠 간을 맞추세요.",
        "국물 온도가 높을 때 간이 강하게 느껴질 수 있어, 한 숟갈 식힌 뒤 다시 확인하세요.",
        "새우젓이나 다진 고추를 쓰는 경우 소금량을 먼저 줄여 중복 염도를 피하세요."
      ],
      "설렁탕": [
        "처음엔 심심한 상태로 두고 소금으로 기본 간만 잡은 뒤 파/후추를 더하세요.",
        "국물의 순한 맛을 유지하려면 후추는 마지막에 소량만 사용하세요.",
        "면/밥을 추가할 경우 국물 농도가 바뀌니 한 번 더 간을 체크하세요."
      ],
      "냉면": [
        "식초·겨자는 소량부터 시작해 2~3회 나눠 조절하세요.",
        "육수 맛을 먼저 본 뒤 조절해야 냉면 고유의 밸런스를 유지할 수 있습니다.",
        "매운 양념을 추가할 경우 산미를 먼저 맞춘 뒤 넣는 편이 안정적입니다."
      ],
      "콩국수": [
        "소금/설탕은 취향 차이가 크므로 아주 소량부터 넣어 단계적으로 맞추세요.",
        "면과 콩국 비율을 먼저 정한 다음 간을 보면 짠맛 과다를 줄일 수 있습니다.",
        "깨/견과 고명은 마지막에 넣어 고소함을 조절하세요."
      ],
      "제육볶음": [
        "양념은 고기에 먼저 얇게 입히고, 볶으면서 부족한 간을 보완하세요.",
        "매운맛은 고춧가루, 단맛은 설탕/물엿으로 분리 조절하면 균형이 쉬워집니다.",
        "양파·대파를 넣으면 수분이 나오므로 마지막에 농도를 다시 맞추세요."
      ],
      "김밥": [
        "속재료의 간을 각각 약하게 맞추면 전체 맛을 과하게 만들지 않습니다.",
        "짠 재료(단무지/햄)가 많으면 밥 간은 최소화하세요.",
        "마요·와사비 등 소스는 찍먹 형태로 두어 개인별 조절 폭을 넓히세요."
      ],
      "잔치국수": [
        "국간장/양념장은 한 번에 붓지 말고 한 숟가락씩 추가하세요.",
        "면과 육수 비율이 맞아야 간 체감이 안정적입니다.",
        "고명 간이 셀수록 육수 간은 약하게 두는 편이 좋습니다."
      ]
    };
    const byFoodEn = {
      "라면": [
        "Start with the standard base (about 550ml water), then add egg/scallion in the last minute.",
        "Use 70-80% of the soup powder first and adjust salt level step by step.",
        "If adding cheese, lower heat first and re-check broth thickness and salt balance."
      ],
      "비빔밥": [
        "Add gochujang in small increments instead of all at once.",
        "Use sesame oil at the end in a small amount to keep ingredient flavors clear.",
        "Balance vegetables and protein first, then mix for better texture."
      ],
      "비빔국수": [
        "Start with about 70% of the sauce, then tune with vinegar/sugar/gochujang.",
        "Rinse noodles well in cold water so sauce coats cleanly.",
        "Add sesame oil and seeds at the end to keep acidity bright."
      ],
      "회덮밥": [
        "Start with half the chojang and add based on vegetable moisture.",
        "Mix rice and vegetables first, then fold in fish last to keep texture.",
        "Use wasabi in tiny portions so aroma does not overpower."
      ],
      "떡볶이": [
        "Build the base sauce first, then add cheese/egg/extras in stages.",
        "If too sweet, balance with water/chili powder; if too hot, balance with sugar/cheese.",
        "More toppings dilute flavor, so re-check final sauce intensity."
      ],
      "국밥": [
        "Season with salt, pepper, and scallion in 2-3 small steps.",
        "Taste after a short cool-down since very hot broth can feel saltier.",
        "If adding salted condiments, reduce base salt first."
      ],
      "설렁탕": [
        "Keep the broth mild first, then adjust with salt and toppings.",
        "Add pepper at the end in a small amount to preserve mildness.",
        "If adding noodles or rice, re-check seasoning once more."
      ],
      "냉면": [
        "Add vinegar and mustard gradually in small rounds.",
        "Taste broth first before adjustment to preserve the original balance.",
        "If adding spicy paste, stabilize acidity first."
      ],
      "콩국수": [
        "Salt/sugar preference varies a lot; adjust in very small steps.",
        "Set noodle-to-broth ratio first, then season.",
        "Add sesame or nut toppings at the end for controlled nuttiness."
      ],
      "제육볶음": [
        "Coat meat lightly first, then adjust during stir-fry.",
        "Control heat and sweetness separately for easier balance.",
        "Onion/scallion release water, so re-check final sauce concentration."
      ],
      "김밥": [
        "Keep each filling moderately seasoned to avoid over-salting.",
        "If salty fillings are used, reduce rice seasoning.",
        "Serve extra sauces on the side for individual adjustment."
      ],
      "잔치국수": [
        "Add soup soy sauce or seasoning one spoon at a time.",
        "Keep noodle-broth ratio consistent before final seasoning.",
        "If toppings are salty, keep broth lighter."
      ]
    };
    return {
      title: isKo ? "조절형으로 먹는 방법" : "How to Customize This Dish",
      lines: isKo
        ? (byFoodKo[food] ?? [
            "소스/양념은 처음부터 전부 넣지 말고 절반부터 시작해 간을 맞추세요.",
            "토핑은 한두 가지씩 추가해 맛 변화를 단계적으로 확인하세요.",
            "먹기 직전에 마지막 간 조절을 하면 실패 확률이 낮습니다."
          ])
        : (byFoodEn[food] ?? [
            "Start with half of seasoning, then adjust gradually.",
            "Add toppings in small steps and re-check balance.",
            "Do a final taste adjustment right before eating."
          ])
    };
  }
  if (q5Choice === "C") {
    const byFoodKo = {
      "삼겹살": [
        "전통적으로는 한 사람이 굽기를 맡고 과거엔 막내가 담당하는 관습도 있었지만, 요즘은 번갈아 굽는 흐름이 많습니다.",
        "처음엔 센 불로 겉면을 익히고, 이후 중불에서 뒤집어가며 지방을 정리하면 식감이 안정적입니다.",
        "상추·쌈장·파채를 기본으로 두고, 취향에 따라 마늘/김치를 추가해 조합을 맞추세요."
      ],
      "떡볶이": [
        "기본 떡/어묵부터 끓인 뒤 치즈·계란·튀김을 순서대로 넣으면 식감이 무너지지 않습니다.",
        "사리를 넣을수록 소스가 묽어지니 마지막에 양념 농도를 다시 맞추세요.",
        "테이블에서 함께 끓일 때는 덜 매운 베이스로 시작해 개인 취향대로 매운맛을 추가하세요."
      ],
      "치킨": [
        "치킨은 재가열/소스 조합 중심으로 함께 즐기는 형태가 자연스럽습니다.",
        "후라이드와 양념을 나눠 두면 취향이 다른 사람도 편하게 선택할 수 있습니다.",
        "사이드(치킨무/소스/음료)를 함께 구성하면 공유 식사 만족도가 높아집니다."
      ],
      "제육볶음": [
        "고기와 채소를 분리해 익히고 마지막에 합치면 식감과 농도를 맞추기 쉽습니다.",
        "매운맛은 고춧가루, 단맛은 설탕/물엿으로 나눠 조절하면 취향 맞추기가 편합니다.",
        "상추/쌈장/마요 소스를 병행하면 같은 제육도 다양한 조합으로 즐길 수 있습니다."
      ],
      "라면": [
        "기본 라면을 먼저 끓이고, 개인별 토핑(계란/치즈/파)을 따로 넣는 방식이 가장 간단합니다.",
        "공용 냄비를 사용할 때는 국물 간을 약하게 시작하면 취향 조절이 쉽습니다.",
        "면 익힘 정도를 맞추기 위해 토핑 투입 타이밍을 짧게 관리하세요."
      ]
    };
    const byFoodEn = {
      "삼겹살": [
        "Traditionally one person often handled grilling, but many groups now rotate the role.",
        "Sear on higher heat first, then finish on medium heat while managing rendered fat.",
        "Use lettuce + ssamjang + scallion as a base, then add garlic/kimchi by preference."
      ],
      "떡볶이": [
        "Cook rice cakes/fish cakes first, then add cheese/egg/fried sides in sequence.",
        "More extras thin the sauce, so re-adjust final concentration.",
        "For table cooking, start mild and add heat per person."
      ],
      "치킨": [
        "For chicken, shared setup is usually about reheating and sauce combinations.",
        "Split original and seasoned styles so everyone can choose comfortably.",
        "Add sides (pickled radish, dips, drinks) to improve group satisfaction."
      ],
      "제육볶음": [
        "Cook meat and vegetables separately first, then combine for better texture control.",
        "Tune heat and sweetness separately for easier group customization.",
        "Serve wraps/dips in parallel to create multiple combinations."
      ],
      "라면": [
        "Cook the base first, then add individual toppings separately.",
        "For a shared pot, begin with lighter seasoning for easier adjustment.",
        "Keep topping timing short so noodle texture stays consistent."
      ]
    };
    return {
      title: isKo ? "함께 조리형으로 먹는 방법" : "How to Cook Together",
      lines: isKo
        ? (byFoodKo[food] ?? [
            "함께 조리할 때는 기본 조합으로 시작하고, 토핑/소스를 단계적으로 추가하세요.",
            "역할은 고정하기보다 상황에 맞게 번갈아 맡는 방식이 최근 흐름과 맞습니다.",
            "중간중간 맛을 함께 확인해 취향 차이를 조율하세요."
          ])
        : (byFoodEn[food] ?? [
            "Start with a shared base and add toppings/sauce in stages.",
            "Rotate tasks flexibly rather than fixing one role.",
            "Taste together during cooking and align preferences."
          ])
    };
  }
  return null;
}

function renderQuiz(app) {
  let step = 0;
  const answers = new Array(questions.length).fill(null);
  let uiLang = "ko";

  function updateHeaderCopy() {
    const isKo = uiLang === "ko";
    const titleEl = document.querySelector(".wrap > h1");
    const subEl = document.querySelector(".wrap > .sub");
    if (titleEl) titleEl.textContent = isKo ? "K-Food Mood Match" : "K-Food Mood Match";
    if (subEl) {
      subEl.textContent = isKo
        ? "질문 6개에 답하면, 지금 상태에 맞는 K-Food를 추천해요. (v2026-02-18-2)"
        : "Answer 6 questions and get the K-Food that best matches your current mood. (v2026-02-18-2)";
    }
  }

  function renderLangToolbar(currentFood = null) {
    const isKo = uiLang === "ko";
    const langLabel = isKo ? "English" : "Korean";
    return el("div", { class: "result-toolbar" }, [
      el("button", {
        class: "lang-toggle",
        onclick: () => {
          uiLang = isKo ? "en" : "ko";
          if (currentFood) renderResult(currentFood);
          else renderStep();
        }
      }, [langLabel])
    ]);
  }

  function renderStep() {
    app.innerHTML = "";
    const isKo = uiLang === "ko";
    updateHeaderCopy();

    const q = questions[step];
    const qEn = QUESTIONS_EN[q.id];
    const title = el("h2", {}, [isKo ? q.title : qEn.title]);

    const choicesWrap = el("div", { class: "choices" });

    Object.entries(q.choices).forEach(([key, koLabel]) => {
      const enLabel = qEn.choices[key];
      const btn = el("button", {
        class: `choice ${answers[step] === key ? "selected" : ""}`,
        onclick: () => {
          answers[step] = key;
          renderStep();
        }
      }, [isKo ? koLabel : enLabel]);
      choicesWrap.append(btn);
    });

    const nav = el("div", { class: "nav" });
    const goNext = () => {
      if (step < questions.length - 1) {
        step++;
        renderStep();
      } else {
        renderResult();
      }
    };

    const back = el("button", {
      class: "navbtn",
      onclick: () => {
        if (step > 0) step--;
        renderStep();
      },
      ...(step === 0 ? { disabled: "true" } : {})
    }, [isKo ? "이전" : "Back"]);

    const nextLabel = step === questions.length - 1
      ? (isKo ? "결과 보기" : "See Result")
      : (isKo ? "다음" : "Next");

    const skipLabel = step === questions.length - 1
      ? (isKo ? "건너뛰고 결과 보기" : "Skip and see result")
      : (isKo ? "이 문항 건너뛰기" : "Skip this question");
    const skip = el("button", {
      class: "navbtn skipbtn",
      onclick: () => {
        answers[step] = null;
        goNext();
      }
    }, [skipLabel]);

    const next = el("button", {
      class: "navbtn primary",
      onclick: () => {
        if (!answers[step]) {
          alert(isKo ? "선택 후 다음으로 넘어갈 수 있어요." : "Please choose an option before continuing.");
          return;
        }
        goNext();
      }
    }, [nextLabel]);

    const navRight = el("div", { class: "nav-right" }, [skip, next]);
    nav.append(back, navRight);

    app.append(renderLangToolbar(), title, choicesWrap, nav, adSlot("quiz-inline-1", uiLang), el("div", { class: "progress" }, [
      isKo ? `진행: ${step + 1} / ${questions.length}` : `Progress: ${step + 1} / ${questions.length}`
    ]));
  }

  function renderResult(focusFood = null) {
    app.innerHTML = "";
    updateHeaderCopy();

    const { ranked, winners } = computeScores(answers);
    const topFood = winners[0][0];
    const displayFood = focusFood ?? topFood;
    const meta = foodMeta(displayFood);
    const isKo = uiLang === "ko";
    const topState = isKo
      ? (stateMap[topFood] ?? "현재 상태")
      : (stateMapEn[topFood] ?? "Current state");
    const { chips, summary } = deriveReasonContent(answers, displayFood, uiLang);
    const interactionGuide = interactionGuideContent(answers[4], displayFood, uiLang);
    const alternatives = ranked
      .filter(([food]) => food !== displayFood)
      .slice(0, 3);

    app.append(
      renderLangToolbar(displayFood),
      el("section", { class: "card final-card" }, [
        el("div", { class: "label" }, [isKo ? "오늘의 최종 카드" : "Final Card"]),
        el("h2", { class: "hero-title" }, [isKo ? displayFood : meta.en]),
        ...(isKo ? [] : [el("div", { class: "hero-en" }, [meta.en])]),
        ...(isKo
          ? [el("p", { class: "meme-core" }, [meta.coreLineKo])]
          : [el("p", { class: "meme-core" }, [meta.coreLineEn])]),
        el("img", { class: "final-image", src: meta.image, alt: isKo ? `${displayFood} 대표 사진` : `${meta.en} hero image`, loading: "lazy" }),
        ...(isKo
          ? [el("p", { class: "meme-sub" }, [meta.subLineKo])]
          : [el("p", { class: "meme-sub" }, [meta.subLineEn])]),
        el("p", { class: "hero-tagline" }, [isKo ? meta.tagline : meta.taglineEn]),
        el("div", { class: "state" }, isKo
          ? ["지금 당신의 상태는 ", el("strong", {}, [topState]), " 입니다."]
          : ["Your current state is ", el("strong", {}, [topState]), "."]),
        el("div", { class: "score" }, [isKo ? `추천 점수: ${scoresOf(displayFood, ranked)}` : `Match Score: ${scoresOf(displayFood, ranked)}`]),
        ...(displayFood !== topFood ? [el("div", { class: "note" }, [isKo ? `원래 1위 추천은 ${topFood}입니다.` : `Original #1 recommendation is ${foodMeta(topFood).en}.`])] : [])
      ]),
      adSlot("result-top-1", uiLang),
      el("section", { class: "card" }, [
        el("h3", {}, [isKo ? "추천 이유" : "Why This Match"]),
        el("div", { class: "chips" }, chips.map((chip) =>
          el("span", { class: "chip" }, [chip])
        )),
        el("div", { class: "reason-lines" }, summary.map((line) =>
          el("p", {}, [line])
        ))
      ]),
      el("section", { class: "card" }, [
        el("h3", {}, [isKo ? "음식 설명" : "About This Dish"]),
        el("p", { class: "desc-line" }, [isKo ? meta.descriptionKo : meta.descriptionEn])
      ]),
      ...(interactionGuide ? [
        el("section", { class: "card" }, [
          el("h3", {}, [interactionGuide.title]),
          el("ul", { class: "tips" }, interactionGuide.lines.map((line) =>
            el("li", {}, [line])
          ))
        ])
      ] : []),
      el("section", { class: "card" }, [
        el("h3", {}, [isKo ? "다른 추천 메뉴 (점수 포함)" : "Other Picks (with Scores)"]),
        el("div", { class: "alt-grid" }, alternatives.map(([food, score]) => {
          const alt = foodMeta(food);
          return el("article", { class: "alt-card" }, [
            el("img", { class: "alt-image", src: alt.image, alt: isKo ? `${food} 이미지` : `${alt.en} image`, loading: "lazy" }),
            el("div", { class: "alt-body" }, [
              el("div", { class: "alt-name" }, [isKo ? food : alt.en]),
              el("div", { class: "alt-line" }, [isKo ? `${alt.altReason} · 점수 ${score}` : `${alt.altReasonEn} · Score ${score}`]),
              el("button", {
                class: "navbtn primary",
                onclick: () => renderResult(food)
              }, [isKo ? "보기" : "View"])
            ])
          ]);
        }))
      ]),
      adSlot("result-mid-1", uiLang),
      el("section", { class: "card" }, [
        el("h3", {}, [isKo ? "이렇게 먹으면 더 맛있어요" : "How to Enjoy It Better"]),
        el("ul", { class: "tips" }, (isKo ? meta.tips : meta.tipsEn).map((tip) =>
          el("li", {}, [tip])
        )),
        el("div", { class: "culture" }, [
          el("div", { class: "culture-title" }, [isKo ? meta.cultureTitle : "K-Culture Note"]),
          el("p", { class: "culture-text" }, [isKo ? meta.cultureText : meta.cultureTextEn])
        ])
      ]),
      el("details", { class: "card" }, [
        el("summary", {}, [isKo ? "전체 점수 보기" : "View Full Scores"]),
        el("div", { class: "all" }, ranked.map(([food, score]) =>
          el("div", { class: "row" }, [
            el("span", { class: "row-food" }, [
              el("img", { class: "row-thumb", src: foodMeta(food).image, alt: isKo ? `${food} 썸네일` : `${foodMeta(food).en} thumbnail`, loading: "lazy" }),
              el("span", {}, [isKo ? food : foodMeta(food).en])
            ]),
            el("span", { class: "score" }, [String(score)])
          ])
        ))
      ]),
      el("div", { class: "nav" }, [
        el("button", {
          class: "navbtn",
          onclick: () => {
            step = 0;
            for (let i = 0; i < answers.length; i++) answers[i] = null;
            renderStep();
          }
        }, [isKo ? "처음으로" : "Start Over"]),
        el("button", {
          class: "navbtn",
          onclick: () => renderResult(topFood)
        }, [isKo ? "1위 추천 다시 보기" : "Back to Top Match"])
      ])
    );
  }

  function scoresOf(food, ranked) {
    const found = ranked.find(([f]) => f === food);
    return found ? found[1] : 0;
  }

  renderStep();
}

function renderCookieBanner() {
  const key = "kfood_cookie_consent_v1";
  if (localStorage.getItem(key)) return;

  const banner = el("div", { class: "cookie-banner" }, [
    el("div", { class: "cookie-title" }, ["Cookie Notice"]),
    el("p", { class: "cookie-text" }, [
      "This site uses cookies for analytics and ad delivery. You can review details in the privacy policy."
    ]),
    el("div", { class: "cookie-actions" }, [
      el("button", {
        onclick: () => {
          localStorage.setItem(key, "rejected");
          banner.remove();
        }
      }, ["Reject"]),
      el("button", {
        class: "accept",
        onclick: () => {
          localStorage.setItem(key, "accepted");
          banner.remove();
        }
      }, ["Accept"])
    ])
  ]);
  document.body.appendChild(banner);
}

async function main() {
  const app = document.getElementById("app");
  app.textContent = "로딩 중...";

  const res = await fetch("./data/scoring.json", { cache: "no-store" });
  if (!res.ok) {
    app.textContent = "scoring.json을 불러오지 못했습니다.";
    return;
  }
  SCORING = await res.json();

  renderQuiz(app);
  renderCookieBanner();
}

document.addEventListener("DOMContentLoaded", () => {
  main().catch(err => {
    const app = document.getElementById("app");
    app.textContent = "오류가 발생했습니다. 콘솔을 확인해주세요.";
    console.error(err);
  });
});
