import { CharacterPrompt } from "../models/types";

export function combineCharacterPrompts(characters: CharacterPrompt[]): string {
  if (!characters || characters.length === 0) {
    return '';
  }

  // Filter enabled characters
  const enabledCharacters = characters.filter(c => c.enabled);
  
  // Map to prompt formats with positions
  return enabledCharacters
    .map(character => {
      let positionPrefix = '';
      switch (character.position) {
        case 'left':
          positionPrefix = '[left:1.2]';
          break;
        case 'right':
          positionPrefix = '[right:1.2]';
          break;
        case 'center':
          positionPrefix = '[center:1.0]';
          break;
        case 'background':
          positionPrefix = '[background:0.8]';
          break;
        case 'foreground':
          positionPrefix = '[foreground:1.3]';
          break;
        default:
          positionPrefix = '';
      }
      
      return `${positionPrefix}${character.name}: ${character.prompt}`;
    })
    .join('\n\n');
}

export function parseCharacterPromptsFromText(text: string): CharacterPrompt[] {
  if (!text) return [];
  
  const lines = text.split('\n\n').filter(line => line.trim().length > 0);
  return lines.map(line => {
    // Try to extract position info from patterns like [left:1.2]
    const positionMatch = line.match(/^\[(left|right|center|background|foreground):[0-9.]+\]/);
    let position = 'center';
    let cleanLine = line;
    
    if (positionMatch) {
      position = positionMatch[1];
      cleanLine = line.substring(positionMatch[0].length).trim();
    }
    
    // Try to extract name before colon
    const nameMatch = cleanLine.match(/^([^:]+):/);
    let name = 'Character';
    let prompt = cleanLine;
    
    if (nameMatch) {
      name = nameMatch[1].trim();
      prompt = cleanLine.substring(nameMatch[0].length).trim();
    }
    
    return {
      id: Math.random().toString(36).substring(2, 11),
      name,
      prompt,
      position,
      enabled: true
    };
  });
}
