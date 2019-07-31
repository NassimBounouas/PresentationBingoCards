import  MeetingsFactory from '../MeetingsFactory';
import Meeting from '../meeting';
import Cards from '../Cards';
import  Participant  from '../Participant';
describe('Meetings creation', () => {
    it('a meeting should have been created properly', () => {
        const mf=new MeetingsFactory();
        const m1=mf.CreateMeeting("andrei","first meeting");
        
        expect(m1.Name).toBe("first meeting");
        expect(m1.Participants.length).toBe(1);
        expect(m1.Participants[0].Name).toBe("andrei");
        let res=m1.AllUnchecked();
        expect(res.isOk()).toBe(true);
        let result= false;
        res.map(t=> result =t);
        expect(result).toBe(true);
        
        expect(m1.TotalNumberOfCards()).toBe(Cards.DefaultCards().length);
        const p=new Participant();
        p.Id=70;
        p.Name ="alexandru";
        const partNumber= m1.AddParticipant(p);
        expect(res.isOk()).toBe(true);
        
  
      })
    it('two meeting have different ids', () => {
      const mf=new MeetingsFactory();
      const m1=mf.CreateMeeting("andrei","first meeting");
      const m2=mf.CreateMeeting("andrei","first meeting");
      
      expect(m1.Id).not.toBe(m2.Id);
      

    })
  })