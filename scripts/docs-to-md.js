
import { chdir} from 'process';
import { fetchGoogleDocsFiles } from "docs-markdown-fork";

const arabic = [
   '1wkEV-zx0AhKC0znVgpgygHF5i4KcJRY64obmrG4JpGI:intro.mdx',
   '1YOtsFhx9RjBK-xgyeSlGaEp3QlcGKDizV5eyIm6d2PQ:al-ajoromia.mdx',
   '1zanjfl_kNMuhggLsDzhezOQOMNoxViwHAwM6s9l4BzQ:al-alfiyya.mdx',
   '1d28wxj2Hcb8c7oMy5_GXZ_WoNg7uQ592u7bYxaYVSu0:al-sarf.mdx'
 ];
 const aqida = [
   '1-s2tbq8zfpVELVnjkp37VvpXRxobeMaTmCw_jTZneec:intro.mdx',
   '1MhQg-qdGVXs2WUF6QJtKxi6Ko2Woig_EiNc88eQRfXM:al-sharia.mdx',
   '134HXce5Z_1lSK-nlk_Q3Di2F_psic9_MBtJ2JXLbdtQ:al-sunnah-baghawi.mdx',
   '1mK_bg8B-QaJ5KiqAuv0Xd25tWcPVcegPiMrlZmqAaBQ:al-sunnah-barbahari.mdx',
   '1SwVMA-nYOn6JgYlDOMmrU0sFV0BBr7qcaQ1xLqRfN9I:fath-al-majid.mdx',
   '17jzutUJX4CqVkREE2eOsd0DBrPiTUmcczbHam0cQA0U:al-sunnah-imam-ahmed.mdx'
 ];
 const blog = [
   '15azTT_OD1Tl1Gth-IrujKp2ILdcPkAXdTtPZZ0AsQsE:al-inkar-al-alani.mdx',
   '1rmsrXsVQLce98QUGagKuL3mterFxPV1QHZzpPU5yUuM:al-hakim-al-motaghalib.mdx',
   '1F087SRbpwDUfmWPNs4yA54oEpqZkfdUzxbahZkDEiBY:al-hokm-bil-qawanin.mdx'
 ];
 const quran = [
  '120YJOnTvDJgS9s4D0Ejk3PM4LtN-UagMikJyIfThOSE:intro.mdx',
  '1uLh-Gv0SAVzoMlibnb-kcbobuCw6oGmOQVvhFTJZDt0:al-tohfa.mdx'
 ];
 const raqaiq = [
  '1qrTWbDDKacGAMv8s24fPu6RcJpoyWloKT5jdTs98q_o:intro.mdx',
  '1MRUCndFSx4BQ1wnA_bKZO34tHFH9TH2kF3xiuCtT1aI:madarij.mdx'
 ];
 const pages = [
  '1wimV6UN7EATK-EQsmt6zmGBAok52lm_j9BqcY_Y6wKs:index.mdx',
  '1PlRCeRVIEgDnRQOKNHbL-QZ2r7TZeFuIKuALqC5PfVI:intro.mdx',
  '1Kwc-l-PSui9rD_Vj6jMNAbBlU_QeHbRIctPsivCyQWs:theme.mdx'
 ]
 main();



 async function main() {
    chdir('src/content/docs');
     for (const file of pages) {
      await fetchGoogleDocsFiles([file]);
    }
    chdir('arabic');
     for (const file of arabic) {
      await fetchGoogleDocsFiles([file]);
    }
    chdir('../aqida');
     for (const file of aqida) {
      await fetchGoogleDocsFiles([file]);
    }
    chdir('../blog');
     for (const file of blog) {
      await fetchGoogleDocsFiles([file]);
    }
    chdir('../quran');
     for (const file of quran) {
      await fetchGoogleDocsFiles([file]);
    }
    chdir('../raqaiq');
     for (const file of raqaiq) {
      await fetchGoogleDocsFiles([file]);
    }
}





   
   
