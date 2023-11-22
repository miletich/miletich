import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Logo from 'common/Logo';
import Article from '../components/Article';
import P from '../components/P';
import H1 from '../components/H1';
import H2 from '../components/H2';
import A from '../components/A';

const iconSize = 26;

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="flex mb-9">
        <Logo className="fill-zinc-100 w-24 h-10 mr-3" />
        <div>
          <H1 className="leading-5">Dušan Miletić</H1>
          <H2 className="[&&]:mb-0 [&&]:text-zinc-400 leading-5">
            Frontend Developer
          </H2>
        </div>
      </div>
      <Article>
        <P>
          I build complex data visualizations in D3, and secure, reliable, and
          performant React apps in TypeScript since 2017.
        </P>
        <div className="flex gap-4 mt-6 mb-2">
          <A href="mailto:d@miletich.cc" title="email">
            <EnvelopeClosedIcon width={iconSize} height={iconSize} />
          </A>
          <A href="https://github.com/miletich" title="GitHub Profile">
            <GitHubLogoIcon width={iconSize} height={iconSize} />
          </A>
          <A
            href="https://www.linkedin.com/in/miletich/"
            title="LinkedIn Profile"
          >
            <LinkedInLogoIcon width={iconSize} height={iconSize} />
          </A>
        </div>
      </Article>
    </header>
  );
}
