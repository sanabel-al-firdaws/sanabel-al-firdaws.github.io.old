
import { chdir} from 'process';
import { fetchGoogleDocsFiles } from "docs-markdown-fork";

const arabic = [
   '1wkEV-zx0AhKC0znVgpgygHF5i4KcJRY64obmrG4JpGI:intro.mdoc',
   '1YOtsFhx9RjBK-xgyeSlGaEp3QlcGKDizV5eyIm6d2PQ:al-ajoromia.mdoc',
   '1zanjfl_kNMuhggLsDzhezOQOMNoxViwHAwM6s9l4BzQ:al-alfiyya.mdoc',
   '1d28wxj2Hcb8c7oMy5_GXZ_WoNg7uQ592u7bYxaYVSu0:al-sarf.mdoc'
 ];
 const aqida = [
   '1-s2tbq8zfpVELVnjkp37VvpXRxobeMaTmCw_jTZneec:intro.mdoc',
   '1MhQg-qdGVXs2WUF6QJtKxi6Ko2Woig_EiNc88eQRfXM:al-sharia.mdoc',
   '134HXce5Z_1lSK-nlk_Q3Di2F_psic9_MBtJ2JXLbdtQ:al-sunnah-baghawi.mdoc',
   '1mK_bg8B-QaJ5KiqAuv0Xd25tWcPVcegPiMrlZmqAaBQ:al-sunnah-barbahari.mdoc',
   '1SwVMA-nYOn6JgYlDOMmrU0sFV0BBr7qcaQ1xLqRfN9I:fath-al-majid.mdoc',
   '17jzutUJX4CqVkREE2eOsd0DBrPiTUmcczbHam0cQA0U:al-sunnah-imam-ahmed.mdoc'
 ];
 const blog = [
   '15azTT_OD1Tl1Gth-IrujKp2ILdcPkAXdTtPZZ0AsQsE:al-inkar-al-alani.mdoc',
   '1F087SRbpwDUfmWPNs4yA54oEpqZkfdUzxbahZkDEiBY:othr-bil-jahl.mdoc'
 ];
 const quran = [
  '120YJOnTvDJgS9s4D0Ejk3PM4LtN-UagMikJyIfThOSE:intro.mdoc',
  '1uLh-Gv0SAVzoMlibnb-kcbobuCw6oGmOQVvhFTJZDt0:al-tohfa.mdoc'
 ];
 const raqaiq = [
  '1qrTWbDDKacGAMv8s24fPu6RcJpoyWloKT5jdTs98q_o:intro.mdoc',
  '1MRUCndFSx4BQ1wnA_bKZO34tHFH9TH2kF3xiuCtT1aI:madarij.mdoc'
 ];
 const pages = [
  '1wimV6UN7EATK-EQsmt6zmGBAok52lm_j9BqcY_Y6wKs:index.mdx',
  '1PlRCeRVIEgDnRQOKNHbL-QZ2r7TZeFuIKuALqC5PfVI:intro.mdoc',
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





   
   
