import { PokerCategory, PokerKey } from "../../../common/enum";
import { GameService } from ".";
import { pokerRuleName } from "../../../common/constants";

const gs = new GameService();
console.log('====== recognize []', pokerRuleName[gs.recognize([])]);
console.log('====== recognize A', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart }
])]);
console.log('====== recognize KING', pokerRuleName[gs.recognize([
  { key: PokerKey.KING, category: PokerCategory.OTHER }
])]);
console.log('====== recognize AA', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart },
  { key: PokerKey.A, category: PokerCategory.Club }
])]);
console.log('====== recognize AAA', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club }
])]);
console.log('====== recognize AAAA', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club }
])]);
console.log('====== recognize AAAAA', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club }
])]);
console.log('====== recognize AAA2', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club }
])]);
console.log('====== recognize AAA22', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Heart },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club }
])]);

console.log('====== recognize A2', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
])]);
console.log('====== recognize A23', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
])]);
console.log('====== recognize A2345', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
])]);
console.log('====== recognize A23456', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.SIX, category: PokerCategory.Club },
])]);
console.log('====== recognize A23567', pokerRuleName[gs.recognize([
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.SIX, category: PokerCategory.Club },
  { key: PokerKey.SEVEN, category: PokerCategory.Club },
])]);
console.log('====== recognize 2233', pokerRuleName[gs.recognize([
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
])]);
console.log('====== recognize 223344', pokerRuleName[gs.recognize([
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.TWO, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
])]);
console.log('====== recognize 333444', pokerRuleName[gs.recognize([
  { key: PokerKey.THREE, category: PokerCategory.Heart },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
])]);
console.log('====== recognize 333444555', pokerRuleName[gs.recognize([
  { key: PokerKey.THREE, category: PokerCategory.Heart },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
])]);
console.log('====== recognize 33334444', pokerRuleName[gs.recognize([
  { key: PokerKey.THREE, category: PokerCategory.Heart },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
])]);
console.log('====== recognize 333344445555', pokerRuleName[gs.recognize([
  { key: PokerKey.THREE, category: PokerCategory.Heart },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
])]);
console.log('====== recognize 333A4445', pokerRuleName[gs.recognize([
  { key: PokerKey.THREE, category: PokerCategory.Heart },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.THREE, category: PokerCategory.Club },
  { key: PokerKey.A, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FOUR, category: PokerCategory.Club },
  { key: PokerKey.FIVE, category: PokerCategory.Club },
])]);
